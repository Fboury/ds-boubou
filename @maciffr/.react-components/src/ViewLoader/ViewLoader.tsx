import React, {ReactNode} from "react";

export interface ViewLoaderProps {
  readonly loading?: boolean;
  readonly children: ReactNode;
  readonly template?: ReactNode | JSX.Element;
}

function DefaultTemplate() {
  return (
    <div className="mcf-d--flex mcf-flex--column">
      <div className="mcf-d--flex">
        <div
          className="mcf-skeleton mcf-rounded--circle"
          style={{width: 40, height: 40}}
        ></div>
        <div className="mcf-skeleton mcf-flex--grow-1 mcf-rounded"></div>
      </div>
      <div className="mcf-skeleton mcf-rounded" style={{height: 40}}/>
      <div className="mcf-skeleton mcf-rounded" style={{height: 40}}></div>
    </div>
  );
}

function ViewLoader({children, loading, template = <DefaultTemplate/>, ...props}: ViewLoaderProps) {

  if (loading) {
    return (
      <div  {...props}>
        <>{template}</>
      </div>
    )
  }

  return (
    <div {...props}>
      <>{children}</>
    </div>
  );
}

export default ViewLoader;
