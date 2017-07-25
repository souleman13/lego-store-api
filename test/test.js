/**
 * Created by Douglas on 7/21/2017.
 */
import Test from 'ava';
import Server from '../src/';


Test('/figures returns something', async t => {
  const res = await Server.inject({ url: '/figures', method: 'GET' });
  t.truthy(res.result);
});

Test(`/figures/id returns something`, async t=> {
  const res = await Server.inject({ url: '/figures/{id}', method: 'GET' });
  t.truthy(res.result);
});

Test(`/figures post request returns something`, async t=> {
  const res = await Server.inject({ url: '/figures', method: 'POST' });
  t.truthy(res.result);
});

Test(`/figures/{id} put request returns something`, async t=> {
  const res = await Server.inject({ url: '/figures/{id}', method: 'PUT' });
  t.truthy(res.result);
});

Test(`/figures/{id} delete request returns something`, async t=> {
  const res = await Server.inject({ url: '/figures/{id}', method: 'DELETE' });
  t.truthy(res.result);
});

