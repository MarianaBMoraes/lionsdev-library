import mongoose from "mongoose";

const main = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/prova2');
    console.log("Conectado com sucesso!");
  } catch (error) {
    console.log(error);
  }
};

main();

export default mongoose