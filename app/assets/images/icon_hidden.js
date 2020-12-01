import React from 'react'
import Svg, { Path } from 'react-native-svg'
import OldPhone from '../../services/UI/OldPhone/OldPhone'
import { Image } from 'react-native'

function SvgComponent(props) {
    if (OldPhone.isOldPhone()) {
        return (
            <Image
                width={24}
                height={24}
                resizeMode='stretch'
                source={require('./icon_hidden.png')}/>
        )
    }
    return (
        <Svg width={24} height={15} viewBox="0 0 24 15">
            <Path
                fill={props.color || '#000'}
                d="M0.10088 2.07899C1.13485 4.12691 2.77341 5.86181 4.84051 7.09842L2.30283 9.63613C1.93674 10.0022 1.93674 10.5958 2.30279 10.9619C2.66893 11.328 3.26246 11.328 3.62865 10.9619L6.60572 7.98477C8.00888 8.56551 9.51497 8.91482 11.0626 9.01537V13.2646C11.0626 13.7824 11.4823 14.2021 12.0001 14.2021C12.5178 14.2021 12.9376 13.7824 12.9376 13.2646V9.01542C14.4851 8.91487 15.9912 8.56556 17.3944 7.98482L20.3715 10.962C20.7376 11.3281 21.3312 11.3281 21.6973 10.962C22.0634 10.5959 22.0634 10.0023 21.6973 9.63618L19.1596 7.09846C21.2267 5.86185 22.8653 4.12696 23.8992 2.07904C24.1326 1.61681 23.947 1.05299 23.4848 0.819603C23.0228 0.586212 22.4588 0.771697 22.2255 1.23393C20.4865 4.67817 16.6111 7.17084 12 7.17084C7.3854 7.17084 3.51202 4.67517 1.7746 1.23388C1.54083 0.7709 0.976692 0.586541 0.515207 0.819557C0.0529728 1.05295 -0.132557 1.61681 0.10088 2.07899Z"
            />
        </Svg>
    )
}

export default SvgComponent
