interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string; // ?: opcional
  email: string;
  password: string;
  techs: Array<String | TechObject>;
  // caso seja apenas um array de strings
  // techs: string[]
}

export default function createUser({
  name = "",
  email,
  password,
}: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };
  return user;
}
