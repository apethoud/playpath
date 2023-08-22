import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const WheelchairCircle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 100 100",
    }}
    viewBox="0 0 100 100"
    width={48}
    height={48}
    {...props}
  >
    <Path d="M50 10c-22.056 0-40 17.944-40 40s17.944 40 40 40 40-17.944 40-40-17.944-40-40-40zm0 78c-20.953 0-38-17.047-38-38s17.047-38 38-38 38 17.047 38 38-17.047 38-38 38z" />
    <Path d="M45.958 34.344a7.146 7.146 0 0 0 7.138-7.138c0-3.935-3.202-7.137-7.138-7.137s-7.137 3.202-7.137 7.137c0 3.936 3.201 7.138 7.137 7.138zm0-12.275a5.144 5.144 0 0 1 5.138 5.137 5.144 5.144 0 0 1-5.138 5.138 5.143 5.143 0 0 1-5.137-5.138 5.143 5.143 0 0 1 5.137-5.137zM68.936 51.609a4.48 4.48 0 0 0-4.187-2.846H54.457l-1.536-9.625a3.777 3.777 0 0 0-1.57-2.504 3.764 3.764 0 0 0-2.889-.623l-3.06.578a3.819 3.819 0 0 0-3.041 4.381l.074.432c-8.468 1.474-14.754 8.854-14.754 17.545 0 9.831 7.998 17.829 17.829 17.829 7.784 0 14.452-4.911 16.868-12.037l2.537 6.514a.998.998 0 0 0 1.348.546l8.081-3.704c.481-.221.707-.778.516-1.272l-5.924-15.214zM45.51 74.778c-8.728 0-15.829-7.101-15.829-15.829 0-7.714 5.579-14.266 13.094-15.576l.843 4.899c-5.092.905-8.95 5.413-8.95 10.675 0 5.978 4.864 10.843 10.843 10.843 5.785 0 10.513-4.558 10.814-10.27h4.021l.782 2.007c-1.259 7.684-7.807 13.251-15.618 13.251zm-1.553-24.536.953 5.539a4.493 4.493 0 0 0 4.438 3.739h4.976c-.297 4.609-4.131 8.27-8.814 8.27-4.876 0-8.843-3.967-8.843-8.843 0-4.289 3.142-7.964 7.29-8.705zm22.436 19.3-4.434-11.385a1 1 0 0 0-.932-.637h-11.68a2.498 2.498 0 0 1-2.467-2.078l-2.549-14.81a1.81 1.81 0 0 1 1.442-2.077l3.06-.578a1.79 1.79 0 0 1 1.369.295c.401.282.666.703.744 1.185l1.67 10.464a1 1 0 0 0 .987.842h11.145c1.033 0 1.947.621 2.325 1.577l5.579 14.333-6.259 2.869z" />
  </Svg>
)
export default WheelchairCircle