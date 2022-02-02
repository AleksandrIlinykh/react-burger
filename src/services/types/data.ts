export type TIngredientType = {
  _id?: string;
  name?: string;
  type?: string;
  proteins?: number;
  fat?: number;
  carbohydrates?: number;
  calories?: number;
  price?: number;
  image?: string;
  image_mobile?: string;
  image_large?: string;
  __v?: number;
  key?: string;
};

export type TOrderMessage = {
  success: boolean;
  orders: [
    {
      ingredients: [string];
      _id: string;
      status: string;
      number: number;
      createdAt: string;
      updatedAt: string;
    }
  ];
  total: number;
  totalToday: number;
}; 

export type TOrders = [
  {
    ingredients: [string];
    _id: string;
    status: string;
    number: number;
    createdAt: string;
    updatedAt: string;
  }
];
  
  

export type TUserData = {
  name?: string;
  email: string;
  password: string;
};