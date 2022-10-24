import { useState } from "react";

import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { IoTrash } from "react-icons/io5";

import {
  ButtonDeleteStyle,
  DeleteScreenStyle,
} from "../../styles/Posts/DeletePost";

const IconDeleteStyle = styled(IoTrash)`
  color: white;
  font-size: 19px;
  margin-left: 9px;
  cursor: pointer;
`;

export default function IconDelete() {
  const [showDeleteScreen, setShowDeleteScreen] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  return (
    <>
      <IconDeleteStyle onClick={() => setShowDeleteScreen(true)} />
      <DeleteScreenStyle showScreen={showDeleteScreen}>
        <div>
          <h1>Are you sure want to delete this post?</h1>
          <div>
            {showLoading ? (
              <ThreeDots color="white" height="13px" />
            ) : (
              <>
                <ButtonDeleteStyle
                  isBlue={false}
                  onClick={() => setShowDeleteScreen(false)}
                >
                  No, go back
                </ButtonDeleteStyle>
                <ButtonDeleteStyle
                  isBlue={true}
                  onClick={() => setShowLoading(true)}
                >
                  Yes, delete it
                </ButtonDeleteStyle>
              </>
            )}
          </div>
        </div>
      </DeleteScreenStyle>
    </>
  );
}
