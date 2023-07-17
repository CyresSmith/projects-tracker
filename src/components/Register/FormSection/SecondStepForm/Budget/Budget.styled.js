import styled from '@emotion/styled';
import theme from 'theme';
import { Field } from 'formik';

export const RangeBox = styled.div`
  width: 100%;
  height: 48px;
  margin-top: 84px;
  display: flex;
  align-items: center;
  position: relative;

  label {
    bottom: calc(48px + ${theme.space[2]});
  }

  input[type='range'].styled-slider {
    -webkit-appearance: none;
  }

  /*progress support*/
  input[type='range'].styled-slider.slider-progress {
    --range: calc(var(--max) - var(--min));
    --ratio: calc((var(--value) - var(--min)) / var(--range));
    --sx: calc(0.5 * 24px + var(--ratio) * (100% - 24px));
  }

  input[type='range'].styled-slider:focus {
    outline: none;
  }

  /*webkit*/
  input[type='range'].styled-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background: #215df6;
    border: none;
    box-shadow: 0 0 2px black;
    margin-top: calc(12px * 0.5 - 24px * 0.5);
    cursor: grab;
  }

  input[type='range'].styled-slider::-webkit-slider-runnable-track {
    height: 12px;
    border: none;
    border-radius: 6px;
    background: #dbdfe9;
    box-shadow: none;
  }

  input[type='range'].styled-slider.slider-progress::-webkit-slider-runnable-track {
    background: linear-gradient(#215df6, #215df6) 0 / var(--sx) 100% no-repeat,
      #dbdfe9;
  }

  input[type='range'].styled-slider.slider-progress:hover::-webkit-slider-runnable-track {
    background: linear-gradient(#5280f3, #5280f3) 0 / var(--sx) 100% no-repeat,
      #dbdfe9;
  }

  /*mozilla*/
  input[type='range'].styled-slider::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background: #215df6;
    border: none;
    box-shadow: 0 0 2px black;
  }

  input[type='range'].styled-slider::-moz-range-track {
    height: 12px;
    border: none;
    border-radius: 6px;
    background: #dbdfe9;
    box-shadow: none;
  }

  input[type='range'].styled-slider.slider-progress::-moz-range-track {
    background: linear-gradient(#215df6, #215df6) 0 / var(--sx) 100% no-repeat,
      #dbdfe9;
  }

  input[type='range'].styled-slider.slider-progress:hover::-moz-range-track {
    background: linear-gradient(#5280f3, #5280f3) 0 / var(--sx) 100% no-repeat,
      #dbdfe9;
  }

  /*ms*/
  input[type='range'].styled-slider::-ms-fill-upper {
    background: transparent;
    border-color: transparent;
  }

  input[type='range'].styled-slider::-ms-fill-lower {
    background: transparent;
    border-color: transparent;
  }

  input[type='range'].styled-slider::-ms-thumb {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background: #215df6;
    border: none;
    box-shadow: 0 0 2px black;
    margin-top: 0;
    box-sizing: border-box;
  }

  input[type='range'].styled-slider::-ms-track {
    height: 12px;
    border-radius: 6px;
    background: #dbdfe9;
    border: none;
    box-shadow: none;
    box-sizing: border-box;
  }

  input[type='range'].styled-slider.slider-progress::-ms-fill-lower {
    height: 12px;
    border-radius: 6px 0 0 6px;
    margin: -undefined 0 -undefined -undefined;
    background: #215df6;
    border: none;
    border-right-width: 0;
  }

  input[type='range'].styled-slider.slider-progress:hover::-ms-fill-lower {
    background: #5280f3;
  }
`;

export const Range = styled(Field)`
  width: 100%;
  padding: 0;
  margin: 0;
`;
