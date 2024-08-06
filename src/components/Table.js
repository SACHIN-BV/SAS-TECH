import React from 'react';
import { View, Text } from 'react-native';
import TableStyles from '../styles/TableStyles';

const Table = ({headers, data}) => {
  return (
    <View style={TableStyles.table}>
      {/* Render table headers */}
      <View style={TableStyles.headerRow}>
        {headers.map((header, index) => (
          <View
            key={index}
            style={[
                TableStyles.headerCell,
              {
                borderTopLeftRadius: index === 0 ? 20 : 0,
                borderTopRightRadius: index === headers.length - 1 ? 20 : 0,
                borderRightWidth: index === headers.length - 1 ? 0 : 0.5
              },
            ]}
          >
            <Text style={TableStyles.headerText}>{header}</Text>
          </View>
        ))}
      </View>

      {/* Render table data */}
      {data.map((row, rowIndex) => (
        <View key={rowIndex} style={[TableStyles.row,{
        }]}>
          {row.map((cell, cellIndex) => (
            <View
              key={cellIndex}
              style={[
                TableStyles.cell,
                {
                  borderBottomWidth: cellIndex === data.length - 1 ? 1 : 0,
                  borderRightWidth: cellIndex === row.length - 1 ? 0 : 0.5,
                  borderBottomColor: 'lightgray',
                },
              ]}
            >
              <Text style={TableStyles.cellText}>{cell}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Table;
