import httpRequest from 'src/utils/httpRequest';
import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { BucketData, uploadFile } from 'src/documents/Site';
import httpRequestFiles from 'src/utils/httpRequestFiles';

// ----------------------------------------------------------------------

const initialState: any = {
  isLoading: false,
  error: null,
  bucketData: {} as BucketData,
  imgUrl: {},
  dataGrid: {
    rows: [] as BucketData[],
  },
};

const slice = createSlice({
  name: 'site',
  initialState,
  reducers: {
    getBucketImagem(state) {
      state.isLoading = true;
      state.error = false;
    },

    getBucketError(state) {
      state.isLoading = false;
      state.error = true;
    },

    getBucketSuccess(state, action: PayloadAction<BucketData[]>) {
      state.isLoading = false;
      state.error = false;
      state.dataGrid.rows = action.payload;
    },

    saveBucketImagem(state) {
      state.isLoading = true;
      state.error = false;
    },

    saveBucketImagemSuccess(state, action) {
      state.isLoading = false;
      state.error = false;
      state.imgUrl = action.payload;
    },

    saveBucketImagemError(state) {
      state.isLoading = false;
      state.error = true;
    },

    deleteBucketImagem(state) {
      state.isLoading = true;
      state.error = false;
    },

    deleteBucketImagemSuccess(state) {
      state.isLoading = false;
      state.error = false;
    },
    deleteBucketImagemError(state) {
      state.isLoading = false;
      state.error = true;
    },

    resetImgUrl: (state) => {
      state.imgUrl = {};
    },

    saveBlock(state) {
      state.isLoading = true;
      state.error = false;
    },
    saveBlockSuccess(state) {
      state.isLoading = false;
      state.error = false;
    },
  },
});

export const { resetImgUrl } = slice.actions;
// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getBucketImagem(bucketName: string) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.getBucketImagem());
    try {
      const response = await httpRequest(`/ffo/images/${bucketName}`, undefined, 'get');
      const imageUrls: BucketData[] = response;
      dispatch(slice.actions.getBucketSuccess(imageUrls));
    } catch (error) {
      console.warn('Erro ao buscar as informações do bucket:', error);
    }
  };
}

export function uploadBucketImagem(body: uploadFile, bucketName: string) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.saveBucketImagem());
    try {
      const response = await httpRequestFiles(`/ffo/upload/${bucketName}`, body);
      dispatch(slice.actions.saveBucketImagemSuccess(response));
    } catch (error) {
      dispatch(slice.actions.saveBucketImagemError());
    }
  };
}

export function deleteBucketImagem(bucketName: string, objectName: string) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.deleteBucketImagem());
    try {
      await httpRequest(`/ffo/delete/${bucketName}/${objectName}`, undefined, 'delete');
      dispatch(slice.actions.deleteBucketImagemSuccess());
    } catch (error) {
      dispatch(slice.actions.deleteBucketImagemError());
    }
  };
}
