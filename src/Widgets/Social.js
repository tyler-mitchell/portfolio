import { Grid, IconButton } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

import { ReactComponent as Github } from "resources/Github.svg";
import { ReactComponent as LinkedIN } from "resources/LinkedIN.svg";
import { ReactComponent as Mail } from "resources/Mail.svg";
import { ReactComponent as Twitter } from "resources/Twitter.svg";

const IconWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 30px;

  background: #f5f5f5;
  box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.02);

  transition: all 0.3s ease-in;
  &:hover {
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
  }
`;

const SocialContainer = styled(Grid)`
  background: rgba(255, 255, 255, 0.1);

  padding: 2px;

  background: #fff;
  border-radius: 10px;

  box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.044),
    0 22.3px 17.9px rgba(0, 0, 0, 0.066), 0 100px 80px rgba(0, 0, 0, 0.11);
`;

const SocialIcon = ({ children, link }) => {
  return (
    <IconButton style={{ padding: 0 }} size="small" target="_blank" href={link}>
      <IconWrapper>{children}</IconWrapper>
    </IconButton>
  );
};

const Social = () => {
  return (
    <div>
      <SocialContainer container spacing={2} alignItems="center">
        <Grid item>
          <SocialIcon link="https://github.com/tyler-mitchell">
            <Github />
          </SocialIcon>
        </Grid>

        <Grid item>
          <SocialIcon link="https://twitter.com/gucciburg">
            <Twitter />
          </SocialIcon>
        </Grid>
        <Grid item>
          <SocialIcon link="https://www.linkedin.com/in/tyler-d/">
            <LinkedIN />
          </SocialIcon>
        </Grid>
        <Grid item>
          <SocialIcon link="mailto: tyler.davis.mitchell@gmail.com">
            <Mail />
          </SocialIcon>
        </Grid>
      </SocialContainer>
    </div>
  );
};

export default Social;
