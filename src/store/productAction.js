import { setFeaturedMedicines, setLoading, setError } from '../store/productSlice'

export const productAction = () => async (dispatch) => {
  try {
    dispatch(setLoading(true))

    const heartResponse = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/products/category/heart`)
    const heartData = await heartResponse.json()

    const bonesResponse = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/v1/products/category/bones`
    );
    const bonesData = await bonesResponse.json();

    const dermaResponse = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/v1/products/category/derma`
    );
    const dermaData = await dermaResponse.json();

    dispatch(setFeaturedMedicines({
      heartMedicine: heartData.data,
      bonesMedicine: bonesData.data,
      dermaMedicine: dermaData.data
    }))
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
}
