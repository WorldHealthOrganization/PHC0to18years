import { Text, View } from 'react-native';
import React from 'react';
import ItemWithTriangle from './ItemWithTriangle';
import { ToolResultItem } from '../../../domains/types/ToolResultItems';
import useMainContext from '../../../context/useMainContext';
import { COLORS } from '../../../styles/generalStyles.styles';

type ToolResultWithTrianglesProps = {
  title?: string;
  data?: ToolResultItem[];
};

const ToolResultWithTriangles: React.FC<ToolResultWithTrianglesProps> = ({
  title,
  data,
}) => {
  const { fontSize } = useMainContext();
  return (
    <View style={{ paddingRight: 15, marginRight: 5 }}>
      {title != null ? (
        <Text
          style={{
            fontSize: fontSize,
            color: COLORS.darkGrey,
          }}>
          {title}
        </Text>
      ) : null}

      {data.map((item: ToolResultItem) => {
        return (
          <View key={item.id}>
            <ItemWithTriangle
              textStart={item.textStart}
              specialContent={item.specialContent}
              linkText={item.linkText}
              linkName={item.linkName}
              linkType={item.linkType}
              textEnd={item.textEnd}
              symbolType={item.symbolType}
            />
            {item.nested
              ? item.nested.map(itemNested => {
                return (
                  <View key={itemNested.id}>
                    <ItemWithTriangle
                      key={itemNested.id}
                      specialContent={itemNested.specialContent}
                      textStart={itemNested.textStart}
                      linkText={itemNested.linkText}
                      linkName={itemNested.linkName}
                      linkType={itemNested.linkType}
                      textEnd={itemNested.textEnd}
                      symbolType={itemNested.symbolType}
                      paddingLeft={20}
                    />
                    {itemNested.nested
                      ? itemNested.nested.map(itemNestedNested => {
                        return (
                          <ItemWithTriangle
                            key={itemNestedNested.id}
                            specialContent={itemNestedNested.specialContent}
                            textStart={itemNestedNested.textStart}
                            linkText={itemNestedNested.linkText}
                            linkName={itemNestedNested.linkName}
                            linkType={itemNestedNested.linkType}
                            textEnd={itemNestedNested.textEnd}
                            symbolType={itemNestedNested.symbolType}
                            paddingLeft={40}
                          />
                        );
                      })
                      : null}
                  </View>
                );
              })
              : null}
          </View>
        );
      })}
    </View>
  );
};

export default ToolResultWithTriangles;
