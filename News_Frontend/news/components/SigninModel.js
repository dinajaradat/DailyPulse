import { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import useUser from "@/hooks/useUser";
import { useAuth } from "@/context/auth";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export function SigninModel() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  async function handlelogin() {
    const x = await login(userName, password);
    Cookies.set("token", JSON.stringify(x));
    setOpen(!open);
    router.push("/");
  }

  return (
    <>
      <Button
        type="submit"
        onClick={handleOpen}
        className="font-bold text-white bg-signup"
      >
        Apply Changes
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient"
            color="teal"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h6" color="white">
              Username and Password Required !!
            </Typography>
          </CardHeader>

          <CardBody className="flex flex-col gap-4" onSubmit={handlelogin}>
            <Input
              label="Username"
              size="lg"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Input
              label="Password"
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button color="teal" fullWidth onClick={handlelogin}>
              Sign In
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
