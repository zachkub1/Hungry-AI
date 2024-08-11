import { useState } from 'react';
import { Drawer } from "antd";
import Link from 'next/link';
import { Button } from "@/components/chatbot/ui/button";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className="bg-black border-none scale-200 text-white lg:hidden" onClick={showDrawer}>
        ☰
      </Button>
      <Drawer
        onClose={onClose}
        open={open}
        width="100%"
        style={{ backgroundColor: 'black' }}
        closeIcon={<span style={{ color: 'white' }}>x</span>}
      >
        <div className="flex flex-col h-full justify-center items-center">
          <Link href="/manual" className="text-2xl my-4 text-center text-white no-underline w-full p-4 block gap-4">
            Manual
          </Link>
          <a href="https://www.helpyoumatch.com/" className="text-2xl my-4 text-center text-white no-underline w-full p-4 block gap-4">
            HelpYou Match

            <div className="mt-10 w-full text-center pb-20">
            <div>
              <Button asChild variant="outline">
                <Link className="text-sm font-medium hover:underline underline-offset-4 w-40" href="/sign-in">
                  Login
                </Link>
              </Button>
              <Button asChild>
                <Link className="color:white  text-sm font-medium hover:underline underline-offset-4 w-40  bg-white text-black" href="/sign-up">
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
          </a>
          
        </div>
      </Drawer>
    </>
  );
}

export default HamburgerMenu;
