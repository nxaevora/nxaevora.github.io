import { withBase } from '../components/withBase';

export type FaqAnswerPart = string | { text: string; href: string };

export interface FaqItem {
  id: string;
  question: string;
  answer: FaqAnswerPart[];
}

export const faqItems: FaqItem[] = [
  {
    id: 'faq-include-game',
    question: 'Does NXAevora include the game?',
    answer: [
      'No. NXAevora contains no game files and does not give them. You must own the game and dump it yourself: decrypted RomFS, ExeFS and control.nacp, with the base game and the v1.1.1 update. NSP files are not accepted. Do not ask for game files and do not share them. NXAevora does not condone the use of illegally distributed copies.',
    ],
  },
  {
    id: 'faq-emulator',
    question: 'How is this different from an emulator?',
    answer: [
      'The code of the game is recompiled ahead of time with ',
      { text: 'ScarletNX', href: 'https://github.com/scarletnx/ScarletNX' },
      ', a static recompiler, and runs with no emulation of the CPU. NXAevora adds the framework for native execution, runtime changes, patches to the game code and a launcher.',
    ],
  },
  {
    id: 'faq-systems',
    question: 'Which systems are supported?',
    answer: [
      'Windows 11 x64 is the main target. Linux x64 is planned for the beta stage or later. macOS, Android and iOS are not planned. See ',
      { text: 'Download', href: withBase('/download/') },
      ' for the requirements.',
    ],
  },
  {
    id: 'faq-game-version',
    question: 'Which game version do I need?',
    answer: [
      'Version 1.1.1. Use the ExeFS of the v1.1.1 update and the RomFS with the update applied. The hints that the recompile uses are valid for one game version only.',
    ],
  },
  {
    id: 'faq-ai',
    question: 'Is AI used to develop NXAevora?',
    answer: [
      'Yes, AI is the primary means of development. Human maintainers decide the direction of the project, verify that it works, review and approve the changes and manage the project.',
    ],
  },
  {
    id: 'faq-play-now',
    question: 'Can I play it now?',
    answer: [
      'Not yet for general use. NXAevora is in alpha and no release exists yet. You can build it yourself with the ',
      {
        text: 'build guide',
        href: 'https://github.com/nxaevora/nxaevora-main/blob/main/docs/build/engine-build.md',
      },
      '.',
    ],
  },
  {
    id: 'faq-nintendo',
    question: 'Is NXAevora affiliated with Nintendo?',
    answer: [
      'No. NXAevora is an independent project. It is not affiliated with or endorsed by Nintendo, The Pokemon Company or Game Freak. See ',
      { text: 'Legal', href: withBase('/legal/') },
      '.',
    ],
  },
  {
    id: 'faq-help',
    question: 'How can I help?',
    answer: [
      'Report a bug with an ',
      { text: 'issue', href: 'https://github.com/nxaevora/nxaevora-main/issues/new/choose' },
      ', or send a ',
      { text: 'pull request', href: 'https://github.com/nxaevora/nxaevora-main/pulls' },
      '. Read ',
      { text: 'CONTRIBUTING', href: 'https://github.com/nxaevora/nxaevora-main/blob/main/CONTRIBUTING.md' },
      ' first.',
    ],
  },
];
