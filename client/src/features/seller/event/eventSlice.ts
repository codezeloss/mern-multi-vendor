import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import eventService from "./eventService.ts";

export interface EventState {
  event: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | any;
}

// ** Initial States
const initialState: EventState = {
  // @ts-ignore
  event: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// !! Create new Event
export const createNewEvent = createAsyncThunk(
  "event/new-event",
  async (eventData: any, thunkAPI) => {
    try {
      return await eventService.createEvent(eventData);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// !! Get all Events
export const getAllEvents = createAsyncThunk(
  "event/all-events",
  async (id: string, thunkAPI) => {
    try {
      return await eventService.getEvents(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// !! Delete Event
export const deleteEvent = createAsyncThunk(
  "event/delete-event",
  async (id: string, thunkAPI) => {
    try {
      return await eventService.deleteSingleEvent(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ** Create New Event
      .addCase(createNewEvent.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createNewEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.event = action.payload;
        state.message = "success";
      })
      .addCase(createNewEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      // ** Get all Events
      .addCase(getAllEvents.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.events = action.payload;
        state.message = "success";
      })
      .addCase(getAllEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      // ** Delete Event
      .addCase(deleteEvent.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
        // @ts-ignore
        state.deletedEvent = action.payload;
        state.message = "success";
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      });
  },
});

export const {} = eventSlice.actions;

export default eventSlice.reducer;
