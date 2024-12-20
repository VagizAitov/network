import { TabNav } from "@radix-ui/themes";
import { Link } from "react-router-dom";

interface TabnavProps {
  
}

const Tabnav: React.FC<TabnavProps> = () => {
  return (
    <>
        <Link to='/'></Link>
        <TabNav.Root>
            <TabNav.Link href="#" active>
                Account
            </TabNav.Link>
            <TabNav.Link href="./documents">Documents</TabNav.Link>
            <TabNav.Link href="#">Settings</TabNav.Link>
        </TabNav.Root>
    </>
  );
};

export default Tabnav;
