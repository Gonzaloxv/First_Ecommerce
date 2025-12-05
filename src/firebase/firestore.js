// src/firebase/firestore.js
import { db } from './firebaseConfig'
import { collection, getDocs, getDoc, doc, query, where, addDoc } from 'firebase/firestore'

export async function getProducts(){
  const col = collection(db, 'products')
  const snapshot = await getDocs(col)
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function getProductsByCategory(catId){
  const col = collection(db, 'products')
  const q = query(col, where('category','==', catId))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function getProductById(id){
  const d = doc(db, 'products', id)
  const snapshot = await getDoc(d)
  if (!snapshot.exists()) return null
  return { id: snapshot.id, ...snapshot.data() }
}

export async function createOrder(order){
  const col = collection(db, 'orders')
  const ref = await addDoc(col, order)
  return ref.id
}


// Local fallback: if Firestore has no products or on error, load from public/data/products.json
async function loadLocalProducts(){
  try{
    const res = await fetch('/data/products.json');
    if (!res.ok) return [];
    const data = await res.json();
    return data.map(p => ({ id: p.id?.toString() || (p.title || '').slice(0,8), ...p }));
  }catch(e){
    console.error('Local products load failed', e);
    return [];
  }
}


// wrap original getProducts to fallback to local file if empty
const _getProducts = getProducts;
export async function getProductsWithFallback(){
  try{
    const res = await _getProducts();
    if (res && res.length>0) return res;
    const local = await loadLocalProducts();
    return local;
  }catch(e){
    console.error('getProducts failed, using local', e);
    return await loadLocalProducts();
  }
}

const _getProductsByCategory = getProductsByCategory;
export async function getProductsByCategoryWithFallback(catId){
  try{
    const res = await _getProductsByCategory(catId);
    if (res && res.length>0) return res;
    const local = await loadLocalProducts();
    return local.filter(p=>p.category==catId);
  }catch(e){
    console.error('getProductsByCategory failed, using local', e);
    return (await loadLocalProducts()).filter(p=>p.category==catId);
  }
}

const _getProductById = getProductById;
export async function getProductByIdWithFallback(id){
  try{
    const res = await _getProductById(id);
    if (res) return res;
    const local = await loadLocalProducts();
    return local.find(p=>p.id==id || p.id==Number(id)) || null;
  }catch(e){
    console.error('getProductById failed, using local', e);
    const local = await loadLocalProducts();
    return local.find(p=>p.id==id || p.id==Number(id)) || null;
  }
}
