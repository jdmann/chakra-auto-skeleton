import {
  Badge,
  Box,
  Button,
  ChakraProvider,
  defaultSystem,
  Flex,
  Grid,
  Heading,
  IconButton,
  Image,
  Skeleton,
  Stack,
  Text,
} from '@chakra-ui/react';
import type { Story } from '@ladle/react';
import React from 'react';
import { Skeletize } from './index';

// Wrapper component for Chakra UI provider
const ChakraWrapper = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider value={defaultSystem}>
    <Box p={6}>{children}</Box>
  </ChakraProvider>
);

// Complex application layout component
const ComplexApplicationLayout = () => (
  <Box maxW="1200px" mx="auto" p={6}>
    {/* Header Section */}
    <Flex
      justify="space-between"
      align="center"
      mb={8}
      pb={4}
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Box>
        <Heading size="xl" mb={2}>
          Dashboard
        </Heading>
        <Text color="gray.600">Welcome back! Here's what's happening today.</Text>
      </Box>
      <Flex gap={3} align="center">
        <Badge colorScheme="green" px={3} py={1}>
          Online
        </Badge>
        <Box w="40px" h="40px" bg="gray.200" borderRadius="full" />
        <IconButton aria-label="Settings" size="sm">
          ⚙️
        </IconButton>
      </Flex>
    </Flex>

    {/* Stats Grid */}
    <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6} mb={8}>
      <Box
        p={6}
        bg="white"
        borderRadius="lg"
        boxShadow="sm"
        border="1px solid"
        borderColor="gray.100"
      >
        <Flex justify="space-between" align="start" mb={4}>
          <Box>
            <Text fontSize="sm" color="gray.600" mb={1}>
              Total Revenue
            </Text>
            <Heading size="lg">$45,231.89</Heading>
          </Box>
          <Box
            w="40px"
            h="40px"
            bg="green.100"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            💰
          </Box>
        </Flex>
        <Text fontSize="sm" color="green.600">
          +20.1% from last month
        </Text>
      </Box>

      <Box
        p={6}
        bg="white"
        borderRadius="lg"
        boxShadow="sm"
        border="1px solid"
        borderColor="gray.100"
      >
        <Flex justify="space-between" align="start" mb={4}>
          <Box>
            <Text fontSize="sm" color="gray.600" mb={1}>
              Active Users
            </Text>
            <Heading size="lg">2,350</Heading>
          </Box>
          <Box
            w="40px"
            h="40px"
            bg="blue.100"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            👥
          </Box>
        </Flex>
        <Text fontSize="sm" color="blue.600">
          +15% from last week
        </Text>
      </Box>

      <Box
        p={6}
        bg="white"
        borderRadius="lg"
        boxShadow="sm"
        border="1px solid"
        borderColor="gray.100"
      >
        <Flex justify="space-between" align="start" mb={4}>
          <Box>
            <Text fontSize="sm" color="gray.600" mb={1}>
              Conversion Rate
            </Text>
            <Heading size="lg">12.5%</Heading>
          </Box>
          <Box
            w="40px"
            h="40px"
            bg="purple.100"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            📈
          </Box>
        </Flex>
        <Text fontSize="sm" color="purple.600">
          +2.1% from yesterday
        </Text>
      </Box>
    </Grid>

    {/* Main Content Grid */}
    <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={8} mb={8}>
      {/* Chart Section */}
      <Box
        p={6}
        bg="white"
        borderRadius="lg"
        boxShadow="sm"
        border="1px solid"
        borderColor="gray.100"
      >
        <Flex justify="space-between" align="center" mb={6}>
          <Box>
            <Heading size="md" mb={1}>
              Revenue Analytics
            </Heading>
            <Text fontSize="sm" color="gray.600">
              Monthly revenue breakdown
            </Text>
          </Box>
          <Stack direction="row" gap={2}>
            <Button size="sm" variant="outline">
              Export
            </Button>
            <Button size="sm" colorScheme="blue">
              View Report
            </Button>
          </Stack>
        </Flex>
        <Skeleton
          loading={true}
          //   src="https://via.placeholder.com/600x300/f7fafc/4a5568?text=Revenue+Chart"
          //   alt="Revenue Chart"
          width="100%"
          height="300px"
          borderRadius="md"
          bg="gray.50"
        />
      </Box>

      {/* Sidebar Content */}
      <Stack gap={6}>
        {/* Recent Activity */}
        <Box
          p={6}
          bg="white"
          borderRadius="lg"
          boxShadow="sm"
          border="1px solid"
          borderColor="gray.100"
        >
          <Heading size="md" mb={4}>
            Recent Activity
          </Heading>
          <Stack gap={4}>
            {[1, 2, 3].map((item) => (
              <Flex key={item} gap={3} align="start">
                <Box w="8px" h="8px" bg="blue.400" borderRadius="full" mt={2} flexShrink={0} />
                <Box flex="1">
                  <Text fontSize="sm" fontWeight="medium">
                    New user registration
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    2 minutes ago
                  </Text>
                </Box>
              </Flex>
            ))}
          </Stack>
        </Box>

        {/* Quick Actions */}
        <Box
          p={6}
          bg="white"
          borderRadius="lg"
          boxShadow="sm"
          border="1px solid"
          borderColor="gray.100"
        >
          <Heading size="md" mb={4}>
            Quick Actions
          </Heading>
          <Stack gap={3}>
            <Button size="sm" variant="outline" width="full" justifyContent="flex-start">
              📊 Generate Report
            </Button>
            <Button size="sm" variant="outline" width="full" justifyContent="flex-start">
              👤 Add New User
            </Button>
            <Button size="sm" variant="outline" width="full" justifyContent="flex-start">
              ⚙️ System Settings
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Grid>

    {/* Team Section */}
    <Box
      p={6}
      bg="white"
      borderRadius="lg"
      boxShadow="sm"
      border="1px solid"
      borderColor="gray.100"
    >
      <Flex justify="space-between" align="center" mb={6}>
        <Box>
          <Heading size="md" mb={1}>
            Team Members
          </Heading>
          <Text fontSize="sm" color="gray.600">
            Manage your team and their account permissions
          </Text>
        </Box>
        <Button colorScheme="blue">Invite Member</Button>
      </Flex>

      <Grid templateColumns="repeat(auto-fill, minmax(280px, 1fr))" gap={4}>
        {[
          { name: 'Sarah Johnson', role: 'Product Manager', avatar: 'SJ' },
          { name: 'Michael Chen', role: 'Senior Developer', avatar: 'MC' },
          { name: 'Emily Davis', role: 'UX Designer', avatar: 'ED' },
          { name: 'James Wilson', role: 'Data Analyst', avatar: 'JW' },
        ].map((member) => (
          <Flex key={member.name} p={4} bg="gray.50" borderRadius="md" gap={3} align="center">
            <Box
              w="48px"
              h="48px"
              bg="blue.500"
              color="white"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontWeight="bold"
              fontSize="sm"
            >
              {member.avatar}
            </Box>
            <Box flex="1">
              <Text fontWeight="medium" fontSize="sm">
                {member.name}
              </Text>
              <Text fontSize="xs" color="gray.600">
                {member.role}
              </Text>
            </Box>
            <IconButton aria-label="More options" size="sm" variant="ghost">
              ⋯
            </IconButton>
          </Flex>
        ))}
      </Grid>
    </Box>

    {/* Footer Actions */}
    <Flex
      justify="space-between"
      align="center"
      mt={8}
      pt={6}
      borderTop="1px solid"
      borderColor="gray.200"
    >
      <Text fontSize="sm" color="gray.600">
        Last updated: {new Date().toLocaleDateString()}
      </Text>
      <Stack direction="row" gap={3}>
        <Button variant="outline">Save Draft</Button>
        <Button colorScheme="blue">Publish Changes</Button>
      </Stack>
    </Flex>
  </Box>
);

export const ComplexLayoutShowcase: Story = () => (
  <ChakraWrapper>
    <Stack gap={10}>
      {/* Loading State */}
      <Box>
        <Box mb={6} p={4} bg="blue.50" borderRadius="md" border="1px solid" borderColor="blue.200">
          <Text fontSize="lg" fontWeight="bold" color="blue.800" mb={2}>
            🔄 Loading State - Complex Application Layout
          </Text>
          <Text fontSize="sm" color="blue.700">
            This showcases how Skeletize handles a complete dashboard with multiple component types:
            headers, stats cards, charts, lists, team grids, and action buttons.
          </Text>
        </Box>
        <Skeletize loading={true}>
          <ComplexApplicationLayout />
        </Skeletize>
      </Box>

      {/* Loaded State */}
      <Box>
        <Box
          mb={6}
          p={4}
          bg="green.50"
          borderRadius="md"
          border="1px solid"
          borderColor="green.200"
        >
          <Text fontSize="lg" fontWeight="bold" color="green.800" mb={2}>
            ✅ Loaded State - Same Layout with Real Content
          </Text>
          <Text fontSize="sm" color="green.700">
            This shows the exact same layout with real content loaded. Compare the skeleton accuracy
            above with the actual component dimensions below.
          </Text>
        </Box>
        <Skeletize loading={false}>
          <ComplexApplicationLayout />
        </Skeletize>
      </Box>
    </Stack>
  </ChakraWrapper>
);

export const EcommerceProductGrid: Story = () => (
  <ChakraWrapper>
    <Stack gap={10}>
      {/* Loading State */}
      <Box>
        <Box
          mb={6}
          p={4}
          bg="purple.50"
          borderRadius="md"
          border="1px solid"
          borderColor="purple.200"
        >
          <Text fontSize="lg" fontWeight="bold" color="purple.800" mb={2}>
            🛍️ E-commerce Product Grid - Loading
          </Text>
          <Text fontSize="sm" color="purple.700">
            Product catalog with images, titles, prices, and action buttons in a responsive grid.
          </Text>
        </Box>
        <Skeletize loading={true}>
          <Box maxW="1000px" mx="auto">
            <Flex justify="space-between" align="center" mb={8}>
              <Box>
                <Heading size="xl" mb={2}>
                  Featured Products
                </Heading>
                <Text color="gray.600">Discover our latest collection</Text>
              </Box>
              <Flex gap={3}>
                <Button variant="outline">Filter</Button>
                <Button variant="outline">Sort</Button>
              </Flex>
            </Flex>

            <Grid templateColumns="repeat(auto-fill, minmax(280px, 1fr))" gap={6}>
              {Array.from({ length: 8 }).map((_, index) => (
                <Box
                  key={index}
                  bg="white"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="sm"
                  border="1px solid"
                  borderColor="gray.100"
                >
                  <Image
                    src={`https://via.placeholder.com/280x200/f7fafc/4a5568?text=Product+${index + 1}`}
                    alt={`Product ${index + 1}`}
                    width="100%"
                    height="200px"
                    objectFit="cover"
                  />
                  <Box p={4}>
                    <Badge colorScheme="purple" mb={2}>
                      New Arrival
                    </Badge>
                    <Heading size="sm" mb={2}>
                      Premium Wireless Headphones
                    </Heading>
                    <Text fontSize="sm" color="gray.600" mb={3}>
                      High-quality sound with noise cancellation technology
                    </Text>
                    <Flex justify="space-between" align="center" mb={4}>
                      <Box>
                        <Text fontSize="lg" fontWeight="bold" color="purple.600">
                          $199.99
                        </Text>
                        <Text fontSize="sm" color="gray.500" textDecoration="line-through">
                          $249.99
                        </Text>
                      </Box>
                      <Flex gap={1}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Text key={i} color={i < 4 ? 'yellow.400' : 'gray.300'}>
                            ★
                          </Text>
                        ))}
                      </Flex>
                    </Flex>
                    <Stack direction="row" gap={2}>
                      <Button size="sm" colorScheme="purple" flex="1">
                        Add to Cart
                      </Button>
                      <IconButton aria-label="Add to wishlist" size="sm" variant="outline">
                        ♡
                      </IconButton>
                    </Stack>
                  </Box>
                </Box>
              ))}
            </Grid>

            <Flex justify="center" mt={8}>
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </Flex>
          </Box>
        </Skeletize>
      </Box>

      {/* Loaded State */}
      <Box>
        <Box
          mb={6}
          p={4}
          bg="green.50"
          borderRadius="md"
          border="1px solid"
          borderColor="green.200"
        >
          <Text fontSize="lg" fontWeight="bold" color="green.800" mb={2}>
            ✅ Loaded E-commerce Grid
          </Text>
          <Text fontSize="sm" color="green.700">
            The same product grid with real content loaded.
          </Text>
        </Box>
        <Skeletize loading={false}>
          <Box maxW="1000px" mx="auto">
            <Flex justify="space-between" align="center" mb={8}>
              <Box>
                <Heading size="xl" mb={2}>
                  Featured Products
                </Heading>
                <Text color="gray.600">Discover our latest collection</Text>
              </Box>
              <Flex gap={3}>
                <Button variant="outline">Filter</Button>
                <Button variant="outline">Sort</Button>
              </Flex>
            </Flex>

            <Grid templateColumns="repeat(auto-fill, minmax(280px, 1fr))" gap={6}>
              {Array.from({ length: 8 }).map((_, index) => (
                <Box
                  key={index}
                  bg="white"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="sm"
                  border="1px solid"
                  borderColor="gray.100"
                >
                  <Image
                    src={`https://via.placeholder.com/280x200/f7fafc/4a5568?text=Product+${index + 1}`}
                    alt={`Product ${index + 1}`}
                    width="100%"
                    height="200px"
                    objectFit="cover"
                  />
                  <Box p={4}>
                    <Badge colorScheme="purple" mb={2}>
                      New Arrival
                    </Badge>
                    <Heading size="sm" mb={2}>
                      Premium Wireless Headphones
                    </Heading>
                    <Text fontSize="sm" color="gray.600" mb={3}>
                      High-quality sound with noise cancellation technology
                    </Text>
                    <Flex justify="space-between" align="center" mb={4}>
                      <Box>
                        <Text fontSize="lg" fontWeight="bold" color="purple.600">
                          $199.99
                        </Text>
                        <Text fontSize="sm" color="gray.500" textDecoration="line-through">
                          $249.99
                        </Text>
                      </Box>
                      <Flex gap={1}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Text key={i} color={i < 4 ? 'yellow.400' : 'gray.300'}>
                            ★
                          </Text>
                        ))}
                      </Flex>
                    </Flex>
                    <Stack direction="row" gap={2}>
                      <Button size="sm" colorScheme="purple" flex="1">
                        Add to Cart
                      </Button>
                      <IconButton aria-label="Add to wishlist" size="sm" variant="outline">
                        ♡
                      </IconButton>
                    </Stack>
                  </Box>
                </Box>
              ))}
            </Grid>

            <Flex justify="center" mt={8}>
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </Flex>
          </Box>
        </Skeletize>
      </Box>
    </Stack>
  </ChakraWrapper>
);
