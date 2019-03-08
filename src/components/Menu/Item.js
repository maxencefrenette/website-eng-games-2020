import React from "react";
import PropTypes from "prop-types";
import LLink from "../LLink";

const Item = props => {
  const { theme, item: { label, to, icon: Icon } = {}, onClick } = props;

  const inner = (
    <>
      {Icon && <Icon />} {label}
    </>
  );

  return (
    <React.Fragment>
      <li className={"hiddenItem" in props ? "hiddenItem" : "item"} key={label}>
        {to.match(/^http/) ? (
          <a
            href={to}
            className={"hiddenItem" in props ? "inHiddenItem" : ""}
            onClick={onClick}
          >
            {inner}
          </a>
        ) : (
          <LLink
            to={to}
            className={"hiddenItem" in props ? "inHiddenItem" : ""}
            onClick={onClick}
            data-slug={to}
          >
            {inner}
          </LLink>
        )}
      </li>

      {/* --- STYLES --- */}
      <style jsx>{`
        .item,
        .showItem {
          background: transparent;
          transition: all ${theme.time.duration.default};
          display: flex;
          align-items: center;

          :global(a) {
            padding: ${theme.space.inset.s};
            display: flex;
            align-items: center;
          }

          :global(svg) {
            opacity: 1;
          }
        }

        :global(.itemList .hideItem) {
          display: none;
        }

        @from-width desktop {
          .item {
            :global(a) {
              color: ${theme.text.color.primary};
              padding: ${theme.space.inset.s};
              transition: all ${theme.time.duration.default};
              border-radius: ${theme.size.radius.small};
            }

            :global(.hero-menu):not(.fixed) & :global(a) {
              color: ${theme.color.neutral.white};
            }

            :global(a:hover) {
              color: ${theme.color.brand.primary};
              background: color(white alpha(-60%));
            }

            :global(svg) {
              transition: all ${theme.time.duration.default};
            }

            &:hover :global(svg) {
              /* fill: ${theme.color.brand.primary}; */
              opacity: 1;

              :global(.hero) & :global(svg) {
                fill: green;
              }
            }
          }

          .showItem {
            display: none;
          }

          .hiddenItem {
            text-align: left;
            padding: ${theme.space.xs};

            & :global(a.inHiddenItem) {
              color: ${theme.text.color.primary};
              &:hover {
                color: ${theme.color.brand.primary};
              }
            }
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Item.propTypes = {
  item: PropTypes.object,
  hidden: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.func,
  theme: PropTypes.object.isRequired
};

export default Item;
