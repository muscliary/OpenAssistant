import { Box, Button, Container, Flex, FormControl, FormLabel, Input, Select, SimpleGrid, Stack, Text, useToast } from "@chakra-ui/react";
import {
    Spacer,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useColorMode
} from "@chakra-ui/react";
/* import { Field, Form, Formik } from "formik"; */
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { getAdminLayout } from "src/components/Layout";
import poster from "src/lib/poster";
import prisma from "src/lib/prismadb";
import useSWR from "swr/mutation";

import { useState } from "react";
import useSWRMutation from "swr/mutation";
import useSWRImmutable from "swr/immutable";
import { get, post } from "src/lib/api";

/* import TreeManagerCell from "src/components/TreeManagerCell"; */

/**
 * Provides the admin status page that shows result of calls to several backend API endpoints,
 * namely /api/v1/tasks/availability, /api/v1/stats/, /api/v1/stats/tree_manager
 */

const StatusIndex = ({ user }) => {
    const toast = useToast();
    const router = useRouter();
    const { data: session, status } = useSession();

    const { colorMode } = useColorMode();
    const backgroundColor = colorMode === "light" ? "white" : "gray.700";
    const dataBackgroundColor = colorMode === "light" ? "gray.100" : "gray.700";
    // Check when the user session is loaded and re-route if the user is not an
    // admin.  This follows the suggestion by NextJS for handling private pages:
    //   https://nextjs.org/docs/api-reference/next/router#usage
    //
    // All admin pages should use the same check and routing steps.
    useEffect(() => {
        if (status === "loading") {
            return;
        }
        if (session?.user?.role === "admin") {
            return;
        }
        router.push("/");
    }, [router, session, status]);

    const [availability, setAvailability] = useState(0);
    const [stats, setStats] = useState(0);
    const [treeManager, setTreeManager] = useState(0);

    const {data: dataAvailability, error: errorAvailability, isLoading: isLoadingAvailability} = useSWRImmutable("/api/admin/tasks_availability", get, {
        onSuccess: (data) => {
            setAvailability(data); }
    });
    const {data: dataStats, error: errorStats, isLoading: isLoadingStats} = useSWRImmutable("/api/admin/stats", get, {
        onSuccess: (data) => { setStats(data); }
    });
    const {data: dataTreeManager, error: errorTreeManager, isLoading: isLoadingTreeManager} = useSWRImmutable("/api/admin/tree_manager", get, {
        onSuccess: (data) => {
            setTreeManager(data); }
    });

    return (
        <>
            <Head>
                <title>Status - Open Assistant</title>
                <meta
                    name="description"
                    content="Conversational AI for everyone. An open source project to create a chat enabled GPT LLM run by LAION and contributors around the world."
                />
            </Head>

      <SimpleGrid columns={[1, 1, 1, 1, 1, 2]} gap={4}>
                <Box bg={backgroundColor} borderRadius="xl" p="6" pt="4" pr="12">
                    <Text as="h1" fontWeight="bold" fontSize="3xl">
                        /api/v1/tasks/availability
                    </Text>
                    <Box bg={dataBackgroundColor} borderRadius="xl" p="6" pt="4" pr="12">
                        <pre id="json">
                            {availability ? JSON.stringify(availability, null, 2) : "None"}
                        </pre>
                    </Box>
                </Box>

                <Box bg={backgroundColor} borderRadius="xl" p="6" pt="4" pr="12">
                    <Text as="h1" fontWeight="bold" fontSize="3xl">
                        /api/v1/stats/
                    </Text>
                    <Box bg={dataBackgroundColor} borderRadius="xl" p="6" pt="4" pr="12">
                        <pre id="json">
                            {stats ? JSON.stringify(stats, null, 2) : "None"}
                        </pre>
                    </Box>
                </Box>

      </SimpleGrid>
      <br/>

                <Box bg={backgroundColor} borderRadius="xl" p="6" pt="4" pr="12">

                    <Text as="h1" fontWeight="bold" fontSize="3xl">
                        /api/v1/stats/tree_manager
                    </Text>

                    {treeManager ?
                     <Box>
                         <Text as="h2" fontSize="2xl">
                             state_counts
                         </Text>
                         <Box bg={dataBackgroundColor} borderRadius="xl" p="6" pt="4" pr="12">
                             <pre id="json">
                                 {JSON.stringify(treeManager.state_counts, null, 2)}
                             </pre>
                         </Box>
                     <TableContainer>
                         <br/>
                         <Text as="h2" fontSize="2xl">
                             message_counts
                         </Text>
                         <Table variant="simple">
                             <TableCaption>Tree Manager</TableCaption>
                             <Thead>
                                 <Tr>
                                     <Th>Message Tree ID</Th>
                                     <Th>State</Th>
                                     <Th>Depth</Th>
                                     <Th>Oldest</Th>
                                     <Th>Youngest</Th>
                                     <Th>Count</Th>
                                     <Th>Goal Tree Size</Th>
                                 </Tr>
                             </Thead>
                             <Tbody>
                                 {treeManager.message_counts.map(({ message_tree_id, state, depth, oldest, youngest, count, goal_tree_size }) => (
                                     <Tr key={message_tree_id}>
                                         <Td>{message_tree_id}</Td>
                                         <Td>{state}</Td>
                                         <Td>{depth}</Td>
                                         <Td>{oldest}</Td>
                                         <Td>{youngest}</Td>
                                         <Td>{count}</Td>
                                         <Td>{goal_tree_size}</Td>
                                     </Tr>
                                 ))}
                             </Tbody>
                         </Table>
                     </TableContainer></Box>
                    : "None"}
                </Box>
        </>
    );
};

StatusIndex.getLayout = getAdminLayout;

export default StatusIndex;
