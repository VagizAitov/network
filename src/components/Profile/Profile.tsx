import { Link } from "react-router-dom";
import { Grid, Button, Box, Card, Flex, Avatar, Text } from "@radix-ui/themes";
import classes from './profile.module.scss'

interface TabnavProps {
  
}

const Tabnav: React.FC<TabnavProps> = () => {
  return (
    <Grid columns="15% 85%" gap="3" rows="100vh" width="auto" className={classes.grid} minWidth="851px" maxWidth="90%">
      <Grid className={classes.navbar} rows='repeat(3, 40px)' mt="5vh">
        <Grid align='center' width='30%' ml='30%'>
          <Link to="/profile">
            <Button variant="ghost" color="gray" style={{alignItems: 'start', justifyContent: 'start'}}>Профиль</Button>
          </Link>
        </Grid>
        <Grid justify='end' align='center' width='30%' ml='30%'>
          <Link to='/wall'>
            <Button variant="ghost" color="gray" style={{alignItems: 'start', justifyContent: 'start'}}>Новости</Button>
          </Link>
        </Grid>
        <Grid justify='end' align='center' width='30%' ml='30%'>
          <Button variant="ghost" color="gray" style={{alignItems: 'start', justifyContent: 'start'}}> Настройки</Button>
        </Grid>
      </Grid>
      <Grid rows='20% 80%' gap='3' className={classes.container}>
        <Grid className={classes.header} mt="3%">
          <Box maxWidth="100%" minWidth="892px">
            <Card>
              <Flex gap="3" align="center">
                <Avatar
                  size="6"
                  src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                  radius="full"
                  fallback="T"
                />
                <Box>
                  <Text as="div" size="5" weight="bold">
                    Teodros Girmay
                  </Text>
                  <Text as="div" size="3" color="gray">
                    Engineering
                  </Text>
                </Box>
                <Box ml='60%'>
                  <Button>Сообщение</Button>
                </Box>
                <Box >
                  <Button>Ещё</Button>
                </Box>
              </Flex>
            </Card>
          </Box>
        </Grid>
        <Grid columns='70% 30%' gap='3' className={classes.main} minWidth='892px'>
          <Grid className={classes.wall}>
            <Grid width='90%' height='600px'>
              <Card>

              </Card>
            </Grid>
          </Grid>
          <Grid className={classes.sidebar}>
            <Grid width='98%' height='600px'>
              <Card>

              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Tabnav;
