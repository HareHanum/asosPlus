import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface Props {
    style: StyleProp<ViewStyle>;
    size: number;
    color: string;
    opacity: number;
}

const Sos: React.FC<Props> = ({ style, size, color, opacity }) => (
    <Svg
        style={style}
        height={size}
        width={size}
        viewBox="0 0 1000 1000"
        fill={color}
        opacity={opacity}
    >
        <Path
            d="M3240.1 4301.6C1269.8 4078.1-174.4 2141.4 144.1 147.3 373.6-1277 1455.7-2446.2 2834.5-2758.8c108.8-25.7 213.6-59.3 235.4-77.2 19.8-17.8 211.7-249.3 425.3-516.3 213.7-267.1 439.2-536.1 500.5-597.4 124.6-124.6 239.4-176.1 318.5-140.4 23.7 11.9 302.7 346.2 617.2 743.8l573.7 724.1h425.3c524.2 2 914 29.7 1169.1 81.1C8144-2327.5 9058-1633.1 9530.8-691.4c633 1266.1 441.2 2751.8-494.6 3822-571.7 656.8-1406.5 1082.1-2292.8 1173.1-245.1 23.7-3281.7 23.7-3503.3-2.1zm3792.3-350.1c850.6-187.9 1560.8-662.7 2027.7-1359.1C9554.7 1854.5 9711 948.5 9491.4 80 9236.2-936.8 8423.1-1805.3 7424.1-2131.7c-429.3-140.4-690.4-172.1-1444.1-172.1-364 0-579.6-7.9-605.4-21.7-31.6-15.8-692.4-826.9-1101.9-1351.2l-43.5-57.4-53.4 47.5c-27.7 25.7-207.7 243.3-397.6 482.7-377.8 470.8-520.3 633-597.4 672.6-27.7 13.8-122.7 39.6-211.7 59.3-1098 221.6-2023.8 1056.5-2387.8 2148.5C448.8 72.1 423.1 248.2 423.1 713.1c0 356.1 5.9 445.1 45.5 623.1 96.9 457 267.1 858.6 520.3 1240.4 203.8 304.7 599.4 698.3 906 902.1 419.4 277 874.4 449.1 1355.1 514.3 33.6 5.9 852.6 7.9 1820 5.9 1746.8-1.9 1762.6-3.9 1962.4-47.4z"
            transform="matrix(.1 0 0 -.1 0 511)"
        />
        <Path
            d="M2078.9 2070.2c-211.7-77.1-366-221.6-468.8-437.2-57.4-118.7-61.3-144.4-61.3-338.3 0-199.8 2-213.6 75.2-358.1 85.1-174.1 211.7-300.7 385.8-385.8 112.8-55.4 114.7-55.4 601.4-65.3l488.6-9.9 59.3-57.4c95-91 130.6-209.7 130.6-427.3 0-102.9-11.9-225.5-25.7-273-33.6-110.8-128.6-215.6-217.6-241.3-41.5-11.9-316.5-19.8-639-19.8-563.8 0-565.8 0-607.3-45.5-55.4-57.4-55.4-132.5-2-199.8l41.5-53.4 656.8 5.9c751.7 5.9 737.9 4 908 193.9 136.5 150.4 176.1 275 187.9 577.7 7.9 215.6 2 269-33.6 387.7-61.3 205.7-144.4 316.5-294.8 393.7l-126.6 65.3h-419.4c-468.8 0-551.9 13.9-682.5 116.7-108.8 87-189.9 255.2-189.9 397.6 0 142.4 81.1 310.6 189.9 397.6 132.5 104.8 207.7 116.7 751.7 116.7 269 0 504.5 5.9 522.3 11.9 89 35.6 95 219.6 9.9 265.1-21.8 11.9-265.1 19.8-587.5 19.8-484.8-1.9-561.9-5.9-652.9-37.5zM4773.2 2082c-233.4-79.1-409.5-231.5-510.4-445.1l-63.3-132.5V-236.5l63.3-132.5c81.1-174.1 223.5-316.5 397.6-397.6 122.7-59.3 148.4-63.3 340.3-63.3s217.6 4 340.3 63.3c174.1 81.1 316.5 223.5 397.6 397.6l63.3 132.5v1740.8l-63.3 132.5c-81.1 174.1-223.5 316.5-397.6 397.6-112.8 53.4-158.3 63.3-310.6 67.3-108.8 4.1-207.7-3.8-257.2-19.7zm472.8-346.2c96.9-53.4 156.3-116.7 221.6-241.4 35.6-63.3 37.6-126.6 37.6-860.5s-2-797.2-37.6-860.5c-67.2-126.6-124.6-187.9-231.5-247.3-150.3-81.1-320.5-81.1-470.8 0-106.8 59.3-164.2 120.7-231.5 247.3-33.6 63.3-37.6 130.6-43.5 771.5-4 385.8-2 747.8 5.9 803.2 17.8 152.3 114.7 300.7 245.3 377.8 57.4 33.6 128.6 67.3 158.3 71.2 99 17.9 249.3-9.8 346.2-61.3zM6965.1 2078.1c-373.9-114.7-629.1-526.2-561.8-904.1 47.5-269 231.4-512.4 470.8-625.1 110.8-51.4 130.6-53.4 550-63.3 352.1-7.9 447.1-17.8 494.6-43.5 182-98.9 269-332.3 227.5-621.2-9.9-83.1-39.6-186-63.3-227.5-73.2-132.5-95-136.5-767.5-136.5-350.2 0-611.3-7.9-633-19.8-93-49.5-75.2-243.3 23.7-267.1 25.7-5.9 334.3-9.9 688.4-5.9l644.9 5.9 96.9 51.4c116.7 59.3 207.7 172.1 267.1 328.4 53.4 140.4 75.2 478.7 41.5 637-49.5 229.5-195.9 431.3-387.8 532.2-96.9 51.4-110.8 53.4-544 63.3-494.6 11.9-534.1 21.8-664.7 162.2-106.8 112.8-136.5 187.9-136.5 352.1 0 106.8 11.9 168.2 37.6 217.6 49.5 96.9 146.4 193.9 239.4 243.3 75.2 41.5 108.8 43.5 627.1 49.5l550 5.9 39.6 51.4c51.4 65.3 49.5 124.6-2 191.9l-39.6 51.4-557.9-2c-403.6.2-581.6-7.7-641-27.5z"
            transform="matrix(.1 0 0 -.1 0 511)"
        />
    </Svg>
);

export default Sos;
