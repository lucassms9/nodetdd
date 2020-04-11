const bcrypt = require('bcryptjs');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('Authentication',()=>{
  beforeEach(async()=>{
    await truncate();
  })
  it('should encrypt user password', async ()=>{
    const user = await User.create({
      name:"lucas 2",
      email:"lucas2@hot",
      password:"123456",
    });

    const compareHash = await bcrypt.compare('123456',user.password_hash);
    expect(compareHash).toBe(true);
  });
})
