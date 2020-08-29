# Initialize truffle
npx truffle init

# Enter development console
npx truffle develop

### Within console ###

# Migrate
## migrate -f 2

# Trigger greeting
## HelloWorld.deployed().then(h => h.greet())