import {Math as VRMath, ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const hvPanel = new Surface(600, 600, Surface.SurfaceShape.Flat);

  const cameraDirection = [0, 0, -1];

  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    frame: () => {
      const cameraQuat = r360.getCameraQuaternion();
      cameraDirection[0] = 0;
      cameraDirection[1] = 0;
      cameraDirection[2] = -1;
      // cameraDirection will point out from the view of the camera,
      // we can use it to compute surface angles
      VRMath.rotateByQuaternion(cameraDirection, cameraQuat);
      const cx = cameraDirection[0];
      const cy = cameraDirection[1];
      const cz = cameraDirection[2];
      const horizAngle = Math.atan2(cx, -cz);
      const vertAngle = Math.asin(cy / Math.sqrt(cx * cx + cy * cy + cz * cz));
      hvPanel.setAngle(horizAngle, vertAngle);
    },
    ...options,
  });
  
  r360.renderToSurface(r360.createRoot('HVPanel'), hvPanel);

  const vplayer = r360.compositor.createVideoPlayer('vplayer');
  vplayer.setSource('./static_assets/video.mp4', '3DLR');
}

window.React360 = {init};