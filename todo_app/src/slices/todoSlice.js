import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../constants";

const initialState = {
  listTodo: [],
};

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const res = await axios
    .get(URL)
    .then((result) => {
      console.log("await-axios.get ~ result", result);
      return result.data;
    })
    .catch((error) => {
      console.log("await-axios.get ~ error", error);
    });
  return res;
});

export const addNewTodo = createAsyncThunk(
  "todo/addNewTodo",
  async (payload, store) => {
    console.log("addNewTodo ~ payload", payload);
    const res = await axios
      .post(URL, payload)
      .then((result) => {
        console.log("addNewTodo ~ result", result);
        store.dispatch(fetchTodos());
      })
      .catch((error) => {
        console.log("addNewTodo ~ error", error);
      });
    return res;
  }
);

export const deleteItem = createAsyncThunk(
  "todo/deleteItem",
  async (payload, store) => {
    const res = await axios
      .delete(`${URL}/${payload.id}`)
      .then((result) => {
        console.log("deleteItem ~ result", result);
        store.dispatch(fetchTodos());
      })
      .catch((error) => {
        console.log("deleteItem ~ error", error);
      });
    return res;
  }
);

export const changeStatus = createAsyncThunk(
  "todo/changeStatus",
  async (payload, store) => {
    const res = await axios
      .patch(`${URL}/${payload.id}`, {
        status: payload.status,
      })
      .then((result) => {
        console.log("changeStatus ~ result", result);
        store.dispatch(fetchTodos());
      })
      .catch((error) => {
        console.log("changeStatus ~ error", error);
      });
    return res;
  }
);

export const saveItem = createAsyncThunk(
  "todo/saveItem",
  async (payload, store) => {
    const res = await axios
      .patch(`${URL}/${payload.id}`, {
        status: payload.status, title: payload.title, creator: payload.creator, desscription: payload.desscription
      })
      .then((result) => {
        console.log("saveItem ~ result", result);
        store.dispatch(fetchTodos());
      })
      .catch((error) => {
        console.log("saveItem ~ error", error);
      });
    return res;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // search(state, action) {
    //   console.log(action.payload)
    //   const value = action.payload;
    //   return state?.filter(item =>
    //     item?.title.toLowerCase().trim().includes(value?.value.toLowerCase().trim()) ||
    //     item?.creator.toLowerCase().trim().includes(value?.value.toLowerCase().trim()) ||
    //     item?.desscription.toLowerCase().trim().includes(value?.value.toLowerCase().trim()));
    // }
  },

  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        console.log("fetchTodos.pending", { state, action });
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        console.log("fetchTodos.fulfilled", { state, action });
        state.listTodo = [...action.payload];
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        console.log("fetchTodos.rejected", { state, action });
      })

      .addCase(addNewTodo.pending, (state, action) => {
        console.log("addNewTodo.pending", { state, action });
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        console.log("addNewTodo.fulfilled", { state, action });
        state.listTodo = [...action.payload];
      })
      .addCase(addNewTodo.rejected, (state, action) => {
        console.log("addNewTodo.rejected", { state, action });
      })

      .addCase(deleteItem.pending, (state, action) => {
        console.log("deleteItem.pending", { state, action });
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        console.log("deleteItem.fulfilled", { state, action });
        state.listTodo = [...action.payload];
      })
      .addCase(deleteItem.rejected, (state, action) => {
        console.log("deleteItem.rejected", { state, action });
      })

      .addCase(changeStatus.pending, (state, action) => {
        console.log("changeStatus.pending", { state, action });
      })
      .addCase(changeStatus.fulfilled, (state, action) => {
        console.log("changeStatus.fulfilled", { state, action });
        state.listTodo = [...action.payload];
      })
      .addCase(changeStatus.rejected, (state, action) => {
        console.log("changeStatus.rejected", { state, action });
      })

      .addCase(saveItem.pending, (state, action) => {
        console.log("saveItem.pending", { state, action });
      })
      .addCase(saveItem.fulfilled, (state, action) => {
        console.log("saveItem.fulfilled", { state, action });
        state.listTodo = [...action.payload];
      })
      .addCase(saveItem.rejected, (state, action) => {
        console.log("saveItem.rejected", { state, action });
      });
  },
});

const { actions, reducer } = todoSlice
export const { search } = actions;
export default reducer;
