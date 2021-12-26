import { wallpaper } from '../assets/index';

import wallpaperStyles from './main-wallpaper.module.css'

export const MainWallpaper = () => {
  return <div className={wallpaperStyles.wallpaper}>
    <img
      src={wallpaper}
      alt="wallpaper"
      className={wallpaperStyles.image}
    />
  </div>
}
