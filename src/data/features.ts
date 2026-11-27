export type FeatureStatus = 'implemented' | 'experimental' | 'planned';

export interface Feature {
  title: string;
  detail?: string;
  status: FeatureStatus;
  home?: boolean;
}

export const statusLabels: Record<FeatureStatus, string> = {
  implemented: 'Implemented',
  experimental: 'Experimental',
  planned: 'Planned',
};

export const features: Feature[] = [
  {
    title: 'Native NVN processing',
    detail: 'Bypasses the command stream of the library. Complete, in maintenance.',
    status: 'implemented',
    home: true,
  },
  {
    title: 'FXAA and SMAA anti-aliasing',
    status: 'implemented',
    home: true,
  },
  {
    title: 'Bilinear and bicubic scaling',
    status: 'implemented',
    home: true,
  },
  {
    title: 'Native mouse camera controls',
    detail: 'In testing.',
    status: 'implemented',
  },
  {
    title: 'Accurate dynamic FPS patch',
    detail: 'In maintenance.',
    status: 'implemented',
  },
  {
    title: 'Temporal anti-aliasing (TAA)',
    status: 'experimental',
  },
  {
    title: 'DLSS, FSR 3.1 and XeSS upscaling',
    status: 'experimental',
  },
  {
    title: 'Intel XeGTAO ambient occlusion',
    status: 'planned',
  },
  {
    title: 'HDR10',
    status: 'planned',
  },
  {
    title: 'Adjustable LoD and draw distances',
    status: 'planned',
  },
  {
    title: 'Larger Pokemon spawn distance',
    status: 'planned',
  },
  {
    title: 'Adjustable shadow resolution, cascades, sharpness and draw distance',
    status: 'planned',
  },
  {
    title: 'Better screen-space reflections',
    status: 'planned',
  },
  {
    title: 'Enhanced bloom',
    status: 'planned',
  },
];
