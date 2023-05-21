import { User } from "./user.model";

    // Creating async function to insert to db
    const createUserToDB = async () => {
        // Creating instance
        const user = new User({
          id: 22976,
          role: "student",
          password: "nice",
          name: {
            firstName: "khandoker",
            middleName: "Shamimul",
            lastName: "haque",
          },
          dataOfBirth: 14 - 11 - 1998,
          gender: "male",
          email: "khandokershamimulhaque@gmail.com",
          contactNo: "01779312970",
          emergencyContactNo: "01911799590",
          presentAddress: "Mohakhali",
          permanentAddress: "Gazipur",
        });
        await user.save();
        console.log(user);
      };