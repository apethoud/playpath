import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Slide = (props: SvgProps) => (
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
    <Path d="M89 79.175c-3.371 0-5.81-6.755-11.154-21.556l-1.387-3.834c-5.926-16.348-18.778-20.364-22.218-21.161V15.102A5.108 5.108 0 0 0 49.14 10a5.107 5.107 0 0 0-5.102 5.102v1.666H20.203v-1.666A5.107 5.107 0 0 0 15.102 10 5.107 5.107 0 0 0 10 15.102V89a1 1 0 0 0 1 1h8.203a1 1 0 0 0 1-1v-3.17h23.836V89a1 1 0 0 0 1 1h8.203a1 1 0 0 0 1-1V43.71c1.16.512 3.012 1.498 5.114 3.26 3.25 2.723 7.764 7.902 10.816 17.114C75.853 81.233 80.325 89.95 88.994 90H89a.997.997 0 0 0 1-1v-8.825a1 1 0 0 0-1-1zM18.203 88H12V15.102A3.105 3.105 0 0 1 15.102 12a3.105 3.105 0 0 1 3.101 3.102V88zm25.836-4.17H20.203V75.3h23.836v8.53zm0-10.53H20.203v-8.53h23.836v8.53zm0-10.53H20.203v-8.53h23.836v8.53zm0-10.531H20.203v-8.53h23.836v8.53zm-17.768-10.53V31.49a5.856 5.856 0 0 1 5.849-5.85 5.856 5.856 0 0 1 5.85 5.85v10.219H26.271zm17.768 0H39.97V31.49c0-4.328-3.521-7.85-7.85-7.85s-7.849 3.521-7.849 7.85v10.219h-4.069V18.768h23.836v22.941zM52.241 88h-6.203V15.102A3.105 3.105 0 0 1 49.14 12a3.105 3.105 0 0 1 3.101 3.102V88zM88 87.946c-6.098-.629-10.101-6.898-15.93-24.491-5.386-16.257-15.061-20.892-17.829-21.913v-6.844c3.655.992 15.05 5.183 20.338 19.768l1.385 3.832C81.54 73.741 83.879 80.219 88 81.075v6.871z" />
  </Svg>
)
export default Slide
