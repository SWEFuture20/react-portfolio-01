import React from "react";
import { typography, breakpoints } from "@material-ui/system";
import styled from "styled-components";

// can't be inlined in the template string for proper type inference in TypeScript
const styleFunction = breakpoints(typography);
const Box = styled.div`
  ${styleFunction}
`;

/**
 * Outputs:
 *
 * font-size: 12px;
 * @media (min-width: 600px) {
 *   font-size: 18px;
 * }
 * @media (min-width: 960px) {
 *   font-size: 24px;
 * }
 */
export default function Body() {
  return (
    <Box xs={{ fontSize: 28 }} sm={{ fontSize: 30 }} md={{ fontSize: 30 }}>
      <div>
            <p>Hello Everyone, I am a programmer and I'm seeking a position as a full-time software engineer. On this website, I have shared a couple of projects that I have completed within the past two months.</p>

        </div>
    </Box>
  );
}
