import React from 'react';
import {Dimensions} from 'react-native';

        const guidelineBaseWidth = 350;
        const guidelineBaseHeight = 680;

        const w = Dimensions.get('window').width;
      export const scale = size => {
            return (Dimensions.get('window').width / guidelineBaseWidth * size)
           };

      export const VerticalScale = size => {
            return (Dimensions.get('window').height / guidelineBaseHeight * size)
            };
   
            



