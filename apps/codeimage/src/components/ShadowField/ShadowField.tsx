import {
  DropdownMenu,
  DropdownPortal,
  sprinkles,
  textFieldStyles,
  themeVars,
  useFloating,
} from '@codeimage/ui';
import clsx from 'clsx';
import {Popover, PopoverButton} from 'solid-headless';
import {Component} from 'solid-js';
import {ShadowForm} from './ShadowForm';

interface ShadowFieldProps {
  value: string;
  onChange: (shadow: string) => void;
}

export const ShadowField: Component<ShadowFieldProps> = props => {
  const floating = useFloating({
    placement: 'right-start',
  });

  return (
    <>
      <Popover
        class={sprinkles({
          display: 'flex',
          width: '100%',
        })}
        defaultOpen={false}
      >
        {({isOpen}) => (
          <>
            <PopoverButton
              class={clsx(
                textFieldStyles.baseField,
                sprinkles({
                  fontSize: 'sm',
                  paddingX: 2,
                  width: '100%',
                }),
              )}
              style={{
                flex: '1',
              }}
              ref={floating.setReference}
            >
              Shadow - test click
            </PopoverButton>

            <DropdownPortal
              isOpen={isOpen()}
              mount={document.getElementById('portal-host')}
            >
              <DropdownMenu
                unmount={false}
                ref={floating.setFloating}
                title={'Shadow'}
                style={{
                  position: floating.strategy,
                  left: `12px`,
                  top: `${floating.y ?? 0}px`,
                }}
              >
                <div
                  style={{
                    'background-color': themeVars.backgroundColor.gray['100'],
                  }}
                  class={sprinkles({
                    paddingX: 5,
                    paddingY: 8,
                  })}
                >
                  <ShadowForm onChange={props.onChange} />
                </div>
              </DropdownMenu>
            </DropdownPortal>
          </>
        )}
      </Popover>
    </>
  );
};
