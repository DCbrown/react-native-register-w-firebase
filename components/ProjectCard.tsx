import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Card, Button, Chip } from 'react-native-paper';

const ProjectCard = () => {
  const LeftContent = (props: any) => (
    <Avatar.Icon {...props} icon={{ uri: 'https://picsum.photos/700' }} />
  );
  return (
    <>
      <Card style={styles.card}>
        <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
        <View style={styles.tagContainer}>
          {/* TODO: console log for now but eventually hook up onPress
           */}
          <Chip mode="outlined">
            <Text>Tag1</Text>
          </Chip>
          {/* TODO: console log for now but eventually hook up onPress
           */}
          <Chip mode="outlined">
            <Text>Tag2</Text>
          </Chip>
        </View>
        <Card.Content>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.{' '}
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button>
            <Text>Explore</Text>
          </Button>
          <Button>
            <Text>Share</Text>
          </Button>
        </Card.Actions>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
        <View style={styles.tagContainer}>
          {/* TODO: console log for now but eventually hook up onPress
           */}
          <Chip mode="outlined">
            <Text>Tag1</Text>
          </Chip>
          {/* TODO: console log for now but eventually hook up onPress
           */}
          <Chip mode="outlined">
            <Text>Tag2</Text>
          </Chip>
        </View>
        <Card.Content>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.{' '}
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button>
            <Text>Explore</Text>
          </Button>
          <Button>
            <Text>Share</Text>
          </Button>
        </Card.Actions>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
  },
  tagContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 5,
  },
});

export default ProjectCard;
