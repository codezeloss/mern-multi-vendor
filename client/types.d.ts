type Product = {
  _id: string;
  name: string;
  discountPrice: number;
  stock: number;
  sold: number;
};

type Event = {
  _id: any;
  name: any;
  discountPrice: any;
  stock: any;
  start_date: string | number | Date;
  finish_date: string | number | Date;
};
