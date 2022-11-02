import sinon, {createSandbox, createStubInstance} from 'sinon';
import App from '../../App';
import {DataSource} from 'typeorm';

function createAppSandbox(): sinon.SinonSandbox {
  const sandbox = createSandbox();
  const fakeDatasource = createStubInstance(DataSource);

  sandbox.stub(App, 'openDatasources').callsFake(async (): Promise<any> => {
    return null;
  });
  sandbox.stub(App, 'closeDatasource').callsFake(async (): Promise<any> => {
    return null;
  });
  sandbox.stub(App, 'getDatasource').callsFake((): DataSource => {
    return fakeDatasource;
  });

  return sandbox;
}

export {createAppSandbox};