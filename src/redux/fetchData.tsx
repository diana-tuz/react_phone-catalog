import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../api/api';

const fetchData = createAsyncThunk(
  'fetchData',
  async () => {
    const response = await getProducts();

    return response;
  },
);

export default fetchData;
