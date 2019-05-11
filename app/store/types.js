import PropTypes from 'prop-types';

export const ScrollPosType = {
  x: PropTypes.number,
  y: PropTypes.number,
};

export const DimensionsType = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export const MenuType = {
  condensed: PropTypes.bool,
};

export const ClientType = {
  scrollPos: PropTypes.shape(ScrollPosType),
  dimensions: PropTypes.shape(DimensionsType),
  orientation: PropTypes.oneOf([
    'any',
    'natural',
    'landscape',
    'portrait',
    'portrait-primary',
    'portrait-secondary',
    'landscape-primary',
    'landscape-secondary',
  ])
};

export const ViewType = {
  client: PropTypes.shape(ClientType),
  menu: PropTypes.shape(MenuType),
};

export const FetchingType = {
  loading: PropTypes.bool,
  dataDidLoad: PropTypes.bool,
  fontsDidLoad: PropTypes.bool,
  displayGreeting: PropTypes.bool
};

export const SoundType = {
  droneOn: PropTypes.bool
};

export const StoreType = {
  view: PropTypes.shape(ViewType),
  sound: PropTypes.shape(SoundType),
  appState: PropTypes.shape(FetchingType),
};
