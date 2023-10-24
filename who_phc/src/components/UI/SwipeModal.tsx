import React from 'react';
import { Alert, Modal, StyleSheet, View, Dimensions } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { COLORS, HEADER_HEIGHT } from '../../styles/generalStyles.styles';

const SCREEN_HEIGHT = Dimensions.get('window').height;

type ModalWindowProps = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  children: React.ReactNode;
};

const SwipeModal: React.FC<ModalWindowProps> = ({
  modalVisible,
  setModalVisible,
  children,
}) => {
  const insets = useSafeAreaInsets();

  return (
  <GestureRecognizer
    style={{ flex: 0 }}
    onSwipeDown={() => setModalVisible(false)}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={[styles.centeredView, { marginTop:insets.top + 15 }]}>
        <View style={styles.top}>
          <View style={styles.swipeIcon} />
        </View>
        {children}
      </View>
    </Modal>
  </GestureRecognizer>
)};

const styles = StyleSheet.create({
  centeredView: {
    paddingRight: 10,
    paddingLeft: 10,
    flex: 1,
    marginTop: 20,
    backgroundColor: COLORS.white,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  modalView: {
    flex: 1,
    alignItems: 'center',
    elevation: 5,
  },
  swipeIcon: {
    height: 3,
    width: 50,
    borderRadius: 2,
    backgroundColor: COLORS.grey,
    alignSelf: 'center',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});

export default SwipeModal;
