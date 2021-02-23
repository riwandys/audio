import { StyleSheet } from 'react-native';
import color from '../constants/color'

export default StyleSheet.create({
    headerTitle: {
        fontFamily: 'DMSans-Bold',
        fontSize: 16,
    },
    greetingSmall: {
        fontFamily: 'DMSans-Regular',
        fontSize: 16,
    },
    greetingLarge: {
        fontFamily: 'DMSans-Bold',
        fontSize: 24,
    },
    badgeActive: {
        fontFamily: 'DMSans-Regular',
        fontSize: 14,
        color: color.white
    },
    badgeInactive: {
        fontFamily: 'DMSans-Regular',
        fontSize: 14,
        color: color.darkGrey
    },
    sectionTitle: {
        fontFamily: 'DMSans-Regular',
        fontSize: 16
    }
});