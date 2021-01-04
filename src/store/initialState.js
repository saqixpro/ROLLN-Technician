import { LoginStates } from "../constants";
export const initialState = {
  currentUser: null,
  loginState: LoginStates.UNDEFINED,
  tempUser: {
    name: "Aron Doe",
    address: "West Hollywood",
  },
};

export const tempUser = {
  name: "Saqib Khan",
  email: "saqib@gmail.com",
  address: "Las Vegas, CA",
  avatar:
    "http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-8.png",
  password: "Saqib1",
  carDetails: {
    year: 2020,
    make: "Toyota",
    model: "RTX3090",
    licensePlateNumber: "EA7C8",
    licenseNumber: "ARQ-333",
    carInsuranceProvider: "Ali Motors",
  },
  dateOfBirth: "12-04-1997",
  ssn: "GRYQ-09-211P8",
  stars: 3.3,
  repairs: [
    {
      date: "12/04/2020",
      repairs: [
        {
          price: 45,
          stars: 4,
          description: "Nawascut Repair",
          location: "92 South Street, NY",
        },
        {
          price: 45,
          stars: 4,
          description: "Complete Engine Replace",
          location: "92 South Street, NY",
        },
      ],
    },
    {
      date: "12/04/2020",
      repairs: [
        {
          price: 45,
          stars: 4,
          description: "Steering Wheel Repair",
          location: "92 South Street, NY",
        },
        {
          price: 45,
          stars: 4,
          description: "Suspension Repairs",
          location: "92 South Street, NY",
        },
      ],
    },
  ],
};
