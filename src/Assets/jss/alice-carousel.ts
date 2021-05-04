import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  .alice-carousel .animated {
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both; }

.alice-carousel .animated-out {
  z-index: 1; }

.alice-carousel .fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut; }

@-webkit-keyframes fadeOut {
  0% {
    opacity: 1; }
  100% {
    opacity: 0;
    visibility: hidden; } }

@keyframes fadeOut {
  0% {
    opacity: 1; }
  100% {
    opacity: 0;
    visibility: hidden; } }

.alice-carousel {
  position: relative;
  width: 100%;
  margin: auto;
  direction: ltr; }

.alice-carousel__wrapper {
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  box-sizing: border-box;
  width: 100%;
  height: auto; }

.alice-carousel__stage {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  transform-style: flat;
  -webkit-transform-style: flat;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden; }
  .alice-carousel__stage-item {
    position: relative;
    display: inline-block;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    vertical-align: top;
    white-space: normal;
    line-height: 0; }
    .alice-carousel__stage-item * {
      line-height: initial; }
    .alice-carousel__stage-item.__hidden {
      opacity: 0;
      overflow: hidden; }

.alice-carousel__prev-btn,
.alice-carousel__next-btn {
  display: inline-block;
  box-sizing: border-box;
  width: 50%;
  padding: 10px 5px; }
  .alice-carousel__prev-btn [data-area]::after,
  .alice-carousel__next-btn [data-area]::after {
    position: relative;
    content: attr(data-area);
    text-transform: capitalize; }

.alice-carousel__prev-btn {
  text-align: right; }

.alice-carousel__prev-btn-item,
.alice-carousel__next-btn-item {
  display: inline-block;
  cursor: pointer;
  padding: 5px;
  margin: 0;
  color: #465798; }
  .alice-carousel__prev-btn-item:hover,
  .alice-carousel__next-btn-item:hover {
    color: darkred; }
  .alice-carousel__prev-btn-item.__inactive,
  .alice-carousel__next-btn-item.__inactive {
    opacity: 0.4;
    pointer-events: none; }

.alice-carousel__play-btn {
  position: absolute;
  top: 30px;
  left: 20px;
  display: inline-block; }
  .alice-carousel__play-btn:hover {
    cursor: pointer; }
  .alice-carousel__play-btn-wrapper {
    position: relative;
    width: 32px;
    height: 32px;
    padding: 10px;
    border-radius: 50%;
    background-color: #fff; }

.alice-carousel__play-btn-item {
  position: absolute;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: 0;
  outline: none;
  background: transparent; }
  .alice-carousel__play-btn-item::before, .alice-carousel__play-btn-item::after {
    position: absolute;
    pointer-events: none;
    display: block;
    width: 0;
    height: 0;
    content: '';
    transition: all 0.4s linear;
    border-width: 8px 0 8px 15px;
    border-style: solid;
    border-color: transparent;
    border-left-color: #465798; }
  .alice-carousel__play-btn-item::before {
    left: 5px;
    height: 14px; }
  .alice-carousel__play-btn-item::after {
    top: 7px;
    left: 18px; }
  .alice-carousel__play-btn-item.__pause::before, .alice-carousel__play-btn-item.__pause::after {
    height: 30px;
    border-width: 0 0 0 10px; }
  .alice-carousel__play-btn-item.__pause::after {
    top: 0;
    left: 18px; }

.alice-carousel__dots {
  margin: 30px 3px 5px;
  padding: 0;
  list-style: none;
  text-align: center; }
  .alice-carousel__dots > li {
    display: inline-block; }
  .alice-carousel__dots-item:not(.__custom) {
    width: 8px;
    height: 8px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #e0e4fb; }
    .alice-carousel__dots-item:not(.__custom):not(:last-child) {
      margin-right: 20px; }
    .alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {
      background-color: #6e7ebc; }

.alice-carousel__slide-info {
  position: absolute;
  top: 20px;
  right: 20px;
  display: inline-block;
  padding: 5px 10px;
  color: #465798;
  border-radius: 5px;
  background-color: rgba(224, 228, 251, 0.6); }
  .alice-carousel__slide-info-item {
    vertical-align: middle;
    line-height: 0; }
`;
