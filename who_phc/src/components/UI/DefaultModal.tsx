import React from 'react';
import { Modal, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { COLORS } from '../../styles/generalStyles.styles';

type ModalWindowProps = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  closeModal: () => void;
  children: React.ReactNode;
  input?: React.ReactNode;
};

const DefaultModal: React.FC<ModalWindowProps> = ({
  modalVisible,
  setModalVisible,
  closeModal,
  input = null,
  children,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={[styles.centeredView, { marginTop: insets.top + 15 }]}>
          <View style={styles.headRow}>
            {input}
            <TouchableOpacity onPress={closeModal}>
              <Text style={{ color: COLORS.darkGrey }}>Cancel</Text>
            </TouchableOpacity>
          </View>

          {children}
        </View>
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
  headRow: {
    flexDirection: "row",
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 5
  },
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

export default DefaultModal;
