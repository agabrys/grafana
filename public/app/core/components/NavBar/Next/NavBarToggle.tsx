import React from 'react';
import { IconButton, useTheme2 } from '@grafana/ui';
import { GrafanaTheme2 } from '@grafana/data';
import { css } from '@emotion/css';
import classnames from 'classnames';

export interface Props {
  className?: string;
  isExpanded: boolean;
  onClick: () => void;
}

export const NavBarToggle = ({ className, isExpanded, onClick }: Props) => {
  const theme = useTheme2();
  const styles = getStyles(theme);

  return (
    <IconButton
      name={isExpanded ? 'angle-left' : 'angle-right'}
      className={classnames(className, styles.icon)}
      size="xl"
      onClick={onClick}
    />
  );
};

NavBarToggle.displayName = 'NavBarToggle';

const getStyles = (theme: GrafanaTheme2) => ({
  icon: css({
    backgroundColor: theme.colors.background.secondary,
    border: `1px solid ${theme.colors.border.weak}`,
    borderRadius: '50%',
    marginRight: 0,
    zIndex: theme.zIndex.sidemenu,

    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }),
});
