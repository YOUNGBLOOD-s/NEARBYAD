import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as productAPI from '../lib/api/product';
import { takeLatest } from 'redux-saga/effects';

const [
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
] = createRequestActionTypes('product/GET_PRODUCT');

const [
  ADD_PRODUCT_MONTHTABLE,
  ADD_PRODUCT_MONTHTABLE_SUCCESS,
  ADD_PRODUCT_MONTHTABLE_FAILURE,
] = createRequestActionTypes('product/ADD_PRODUCT_MONTHTABLE');

const [
  UPDATE_PRODUCT_NATION,
  UPDATE_PRODUCT_NATION_SUCCESS,
  UPDATE_PRODUCT_NATION_FAILURE,
] = createRequestActionTypes('product/UPDATE_PRODUCT_NATION');

const [
  UPDATE_PRODUCT_IMAGE,
  UPDATE_PRODUCT_IMAGE_SUCCESS,
  UPDATE_PRODUCT_IMAGE_FAILURE,
] = createRequestActionTypes('product/UPDATE_PRODUCT_IMAGE');

const [
  UPDATE_PRODUCT_CONTENT,
  UPDATE_PRODUCT_CONTENT_SUCCESS,
  UPDATE_PRODUCT_CONTENT_FAILURE,
] = createRequestActionTypes('product/UPDATE_PRODUCT_CONTENT');

const [
  UPDATE_PRODUCT_MONTHTABLE,
  UPDATE_PRODUCT_MONTHTABLE_SUCCESS,
  UPDATE_PRODUCT_MONTHTABLE_FAILURE,
] = createRequestActionTypes('product/UPDATE_PRODUCT_MONTHTABLE');

const [
  TOGGLE_PRODUCT_COUNSEL,
  TOGGLE_PRODUCT_COUNSEL_SUCCESS,
  TOGGLE_PRODUCT_COUNSEL_FAILURE,
] = createRequestActionTypes('product/TOGGLE_PRODUCT_COUNSEL');

const [
  TOGGLE_PRODUCT_COMPLETED,
  TOGGLE_PRODUCT_COMPLETED_SUCCESS,
  TOGGLE_PRODUCT_COMPLETED_FAILURE,
] = createRequestActionTypes('product/TOGGLE_PRODUCT_COMPLETED');

export const getProduct = createAction(GET_PRODUCT, ({ id, token }) => ({
  id,
  token,
}));
export const addMonthtable = createAction(
  ADD_PRODUCT_MONTHTABLE,
  ({ token, form }) => ({
    token,
    form,
  }),
);

export const updateProductNation = createAction(
  UPDATE_PRODUCT_NATION,
  ({ id, form, token }) => ({ id, form, token }),
);
export const updateProductImage = createAction(
  UPDATE_PRODUCT_IMAGE,
  ({ id, form, token }) => ({ id, form, token }),
);
export const updateProductContent = createAction(
  UPDATE_PRODUCT_CONTENT,
  ({ id, form, token }) => ({ id, form, token }),
);
export const updateProductMonthtable = createAction(
  UPDATE_PRODUCT_MONTHTABLE,
  ({ id, form, token }) => ({ id, form, token }),
);
export const toggleProductCounsel = createAction(
  TOGGLE_PRODUCT_COUNSEL,
  ({ id, form, token }) => ({ id, form, token }),
);

export const toggleProductCompleted = createAction(
  TOGGLE_PRODUCT_COMPLETED,
  ({ id }) => ({ id }),
);

const getProductSaga = createRequestSaga(GET_PRODUCT, productAPI.productInfo);
const addProductMonthtableSaga = createRequestSaga(
  ADD_PRODUCT_MONTHTABLE,
  productAPI.addMonthtable,
);
const updateProductNationSaga = createRequestSaga(
  UPDATE_PRODUCT_NATION,
  productAPI.updateNation,
);
const updateProductImageSaga = createRequestSaga(
  UPDATE_PRODUCT_IMAGE,
  productAPI.updateImage,
);
const updateProductContentSaga = createRequestSaga(
  UPDATE_PRODUCT_CONTENT,
  productAPI.updateContent,
);
const updateProductMonthtableSage = createRequestSaga(
  UPDATE_PRODUCT_MONTHTABLE,
  productAPI.updateMonthtable,
);

const toggleProductCounselSaga = createRequestSaga(
  TOGGLE_PRODUCT_COUNSEL,
  productAPI.toggleCounsel,
);

const toggleProductCompletedSaga = createRequestSaga(
  TOGGLE_PRODUCT_COMPLETED,
  productAPI.toggleCompleted,
);

export function* productSaga() {
  yield takeLatest(GET_PRODUCT, getProductSaga);
  yield takeLatest(ADD_PRODUCT_MONTHTABLE, addProductMonthtableSaga);
  yield takeLatest(UPDATE_PRODUCT_NATION, updateProductNationSaga);
  yield takeLatest(UPDATE_PRODUCT_IMAGE, updateProductImageSaga);
  yield takeLatest(UPDATE_PRODUCT_CONTENT, updateProductContentSaga);
  yield takeLatest(UPDATE_PRODUCT_MONTHTABLE, updateProductMonthtableSage);
  yield takeLatest(TOGGLE_PRODUCT_COUNSEL, toggleProductCounselSaga);
  yield takeLatest(TOGGLE_PRODUCT_COMPLETED, toggleProductCompletedSaga);
}

const initialState = {
  product: null,
  error: null,
  updateErrors: {
    nation: null,
    image: null,
    contents: null,
    month: null,
  },
  addErrors: {
    month: null,
  },
  toggleCounselError: null,
  toggleCompletedError: null,
};

const product = handleActions(
  {
    [GET_PRODUCT_SUCCESS]: (state, { payload: product }) => ({
      ...state,
      product,
      error: null,
    }),
    [GET_PRODUCT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      product: null,
      error,
    }),
    [ADD_PRODUCT_MONTHTABLE_SUCCESS]: (
      state,
      { payload: { insertMonth } },
    ) => ({
      ...state,
      product: {
        ...state.product,
        month: insertMonth,
      },
      addErrors: {
        month: null,
      },
    }),
    [ADD_PRODUCT_MONTHTABLE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      addErrors: {
        month: error,
      },
    }),
    [UPDATE_PRODUCT_NATION_SUCCESS]: (
      state,
      { payload: { updateNation } },
    ) => ({
      ...state,
      product: {
        ...state.product,
        nation: {
          ...state.product.nation,
          ...updateNation,
        },
      },
      updateErrors: {
        ...state.updateErrors,
        nation: null,
      },
    }),
    [UPDATE_PRODUCT_NATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      updateErrors: {
        ...state.updateErrors,
        nation: error,
      },
    }),
    [UPDATE_PRODUCT_IMAGE_SUCCESS]: (state, { payload: { update } }) => ({
      ...state,
      product: {
        ...state.product,
        images: state.product.images.map(image => {
          if (image.idx === update.idx) {
            return { ...image, ...update };
          }
          return image;
        }),
      },
      updateErrors: {
        ...state.updateErrors,
        image: null,
      },
    }),
    [UPDATE_PRODUCT_IMAGE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      updateErrors: {
        image: error,
      },
    }),
    [UPDATE_PRODUCT_CONTENT_SUCCESS]: (
      state,
      { payload: { inputContents } },
    ) => ({
      ...state,
      product: {
        ...state.product,
        contents: state.product.contents.map(content => {
          if (content.idx === inputContents.idx) {
            return inputContents;
          }
          return content;
        }),
      },
      updateErrors: {
        ...state.updateErrors,
        contents: null,
      },
    }),
    [UPDATE_PRODUCT_CONTENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      updateErrors: {
        ...state.updateErrors,
        contents: error,
      },
    }),
    [UPDATE_PRODUCT_MONTHTABLE_SUCCESS]: (
      state,
      { payload: { updateMonth } },
    ) => ({
      ...state,
      product: {
        ...state.product,
        month: updateMonth,
      },
      updateErrors: {
        ...state.updateErrors,
        month: null,
      },
    }),
    [UPDATE_PRODUCT_MONTHTABLE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      updateErrors: {
        ...state.updateErrors,
        month: error,
      },
    }),
    [TOGGLE_PRODUCT_COUNSEL_SUCCESS]: (state, { payload: { updateValue } }) => {
      return {
        ...state,
        product: {
          ...state.product,
          counselList: state.product.counselList.map(counsel => {
            if (counsel.idx === updateValue.idx) return updateValue;
            return counsel;
          }),
        },
      };
    },
    [TOGGLE_PRODUCT_COUNSEL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      toggleCounselError: error,
    }),
    [TOGGLE_PRODUCT_COMPLETED_SUCCESS]: (state, { payload: { nation } }) => ({
      ...state,
      product: {
        ...state.product,
        nation: {
          ...state.product.nation,
          completed: nation.completed,
        },
      },
      toggleCompletedError: null,
    }),
    [TOGGLE_PRODUCT_COMPLETED_FAILURE]: (state, { payload: error }) => ({
      ...state,
      toggleCompletedError: error,
    }),
  },
  initialState,
);

export default product;
