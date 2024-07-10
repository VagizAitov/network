import { TabNav } from "@radix-ui/themes";

interface TabnavProps {
  
}

const Tabnav: React.FC<TabnavProps> = () => {
  return (
    <>
        <TabNav.Root>
            <TabNav.Link href="#" active>
                Account
            </TabNav.Link>
            <TabNav.Link href="#">Documents</TabNav.Link>
            <TabNav.Link href="#">Settings</TabNav.Link>
        </TabNav.Root>
    </>
  );
};

export default Tabnav;
