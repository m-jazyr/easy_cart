import * as React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from '../style';
import { Header, ListItem } from 'react-native-elements';
import BackArrow from '../../../components/backArrow';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../assets/colors';
import { profileOptions } from '../../../utils/constants';

function ProfileScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <ListItem>
      <View style={styles.profileOptionsIcon}>
        <item.icon height={25} width={25} />
      </View>
      <ListItem.Content>
        <ListItem.Title style={styles.profileOptionsText}>
          {item.name}
        </ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron type={'material-community'} name={'chevron-right'} />
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerContainerStyle}
        leftComponent={<BackArrow navigation={navigation} />}
      />
      <View style={styles.profileHeader}>
        <Text style={styles.profilePhoneText}>+91 {'9567666999'}</Text>
        <TouchableOpacity style={styles.profileEdit}>
          <Text style={styles.profileEditText}>Complete account Setup</Text>
          <Icon name={'chevron-right'} size={16} color={colors.link} />
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={profileOptions}
        renderItem={renderItem}
      />
    </View>
  );
}

export default ProfileScreen;
