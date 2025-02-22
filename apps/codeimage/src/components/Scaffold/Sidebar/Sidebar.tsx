import {Component} from 'solid-js';
import * as styles from './Sidebar.css';
import {SidebarVariants} from './Sidebar.css';
import {Box} from '@codeimage/ui';

export const Sidebar: Component<SidebarVariants> = props => {
  return (
    <Box
      class={styles.sidebar({
        position: props.position,
      })}
    >
      {props.children}
    </Box>
  );
};
