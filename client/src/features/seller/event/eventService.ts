import axios from "axios";
import { base_url } from "../../../utils/base_url.ts";
import { config } from "../../../utils/axios_config.ts";

const createEvent = async (eventData: any) => {
  const configP = { headers: { "Content-Type": "multipart/form-data" } };
  const response = await axios.post(
    `${base_url}seller/event/create-event`,
    eventData,
    configP
  );
  return response.data;
};

const getEvents = async (id: string) => {
  const response = await axios.get(`${base_url}seller/event/get-events/${id}`);
  return response.data;
};

const deleteSingleEvent = async (id: string) => {
  const response = await axios.delete(
    `${base_url}seller/event/delete-event/${id}`,
    config
  );
  return response.data;
};

const eventService = {
  createEvent,
  getEvents,
  deleteSingleEvent,
};

export default eventService;
