import React from 'react'
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native'
import { Button } from 'react-native-elements'
import navigation from '@react-navigation/native'
import { Icon } from 'react-native-elements'

export default function nodejs({ navigation }) {

    return (
        <ScrollView style={styles.view}>

            <Text style={styles.title}>node.js</Text>
            
            <Icon 
                type="ionicon"
                name="chevron-back"
                color="#F41635"
                size={25}
                raised
                containerStyle={styles.icon}
                onPress= {() => navigation.goBack()}
            />

            <Text style={styles.text}>Node.js is licensed for use as follows:{'\n'}{'\n'}

"""{'\n'}{'\n'}
Copyright Node.js contributors. All rights reserved.{'\n'}{'\n'}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:{'\n'}{'\n'}

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.{'\n'}{'\n'}

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.{'\n'}{'\n'}
"""{'\n'}{'\n'}

This license applies to parts of Node.js originating from the
https://github.com/joyent/node repository:{'\n'}{'\n'}

"""{'\n'}{'\n'}
Copyright Joyent, Inc. and other Node contributors. All rights reserved.
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:{'\n'}{'\n'}

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.{'\n'}{'\n'}

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.{'\n'}{'\n'}
"""{'\n'}{'\n'}

The Node.js license applies to all parts of Node.js that are not externally
maintained libraries.{'\n'}{'\n'}

The externally maintained libraries used by Node.js are:{'\n'}{'\n'}

- Acorn, located at deps/acorn, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    MIT License{'\n'}{'\n'}
    Copyright (C) 2012-2020 by various contributors (see AUTHORS){'\n'}{'\n'}

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:{'\n'}{'\n'}

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.{'\n'}{'\n'}

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- c-ares, located at deps/cares, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    Copyright (c) 2007 - 2018, Daniel Stenberg with many contributors, see AUTHORS
    file.{'\n'}{'\n'}

    Copyright 1998 by the Massachusetts Institute of Technology.{'\n'}{'\n'}

    Permission to use, copy, modify, and distribute this software and its
    documentation for any purpose and without fee is hereby granted, provided that
    the above copyright notice appear in all copies and that both that copyright
    notice and this permission notice appear in supporting documentation, and that
    the name of M.I.T. not be used in advertising or publicity pertaining to
    distribution of the software without specific, written prior permission.
    M.I.T. makes no representations about the suitability of this software for any
    purpose.  It is provided "as is" without express or implied warranty.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- cjs-module-lexer, located at deps/cjs-module-lexer, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    MIT License{'\n'}{'\n'}
    -----------

    Copyright (C) 2018-2020 Guy Bedford{'\n'}{'\n'}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:{'\n'}{'\n'}

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.{'\n'}{'\n'}

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  """{'\n'}{'\n'}

- ICU, located at deps/icu-small, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    COPYRIGHT AND PERMISSION NOTICE (ICU 58 and later){'\n'}{'\n'}

    Copyright © 1991-2020 Unicode, Inc. All rights reserved.{'\n'}{'\n'}
    Distributed under the Terms of Use in https://www.unicode.org/copyright.html.{'\n'}{'\n'}

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of the Unicode data files and any associated documentation
    (the "Data Files") or Unicode software and any associated documentation
    (the "Software") to deal in the Data Files or Software
    without restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, and/or sell copies of
    the Data Files or Software, and to permit persons to whom the Data Files
    or Software are furnished to do so, provided that either
    (a) this copyright and permission notice appear with all copies
    of the Data Files or Software, or
    (b) this copyright and permission notice appear in associated
    Documentation.{'\n'}{'\n'}

    THE DATA FILES AND SOFTWARE ARE PROVIDED "AS IS", WITHOUT WARRANTY OF
    ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
    WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT OF THIRD PARTY RIGHTS.
    IN NO EVENT SHALL THE COPYRIGHT HOLDER OR HOLDERS INCLUDED IN THIS
    NOTICE BE LIABLE FOR ANY CLAIM, OR ANY SPECIAL INDIRECT OR CONSEQUENTIAL
    DAMAGES, OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE,
    DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
    TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THE DATA FILES OR SOFTWARE.{'\n'}{'\n'}

    Except as contained in this notice, the name of a copyright holder
    shall not be used in advertising or otherwise to promote the sale,
    use or other dealings in these Data Files or Software without prior
    written authorization of the copyright holder.{'\n'}{'\n'}

    ---------------------{'\n'}{'\n'}

    Third-Party Software Licenses{'\n'}{'\n'}

    This section contains third-party software notices and/or additional
    terms for licensed third-party software components included within ICU
    libraries.{'\n'}{'\n'}

    1. ICU License - ICU 1.8.1 to ICU 57.1{'\n'}{'\n'}

    COPYRIGHT AND PERMISSION NOTICE{'\n'}{'\n'}

    Copyright (c) 1995-2016 International Business Machines Corporation and others
    All rights reserved.{'\n'}{'\n'}

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, and/or sell copies of the Software, and to permit persons
    to whom the Software is furnished to do so, provided that the above
    copyright notice(s) and this permission notice appear in all copies of
    the Software and that both the above copyright notice(s) and this
    permission notice appear in supporting documentation.{'\n'}{'\n'}

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
    OF THIRD PARTY RIGHTS. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
    HOLDERS INCLUDED IN THIS NOTICE BE LIABLE FOR ANY CLAIM, OR ANY
    SPECIAL INDIRECT OR CONSEQUENTIAL DAMAGES, OR ANY DAMAGES WHATSOEVER
    RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF
    CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
    CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.{'\n'}{'\n'}

    Except as contained in this notice, the name of a copyright holder
    shall not be used in advertising or otherwise to promote the sale, use
    or other dealings in this Software without prior written authorization
    of the copyright holder.{'\n'}{'\n'}

    All trademarks and registered trademarks mentioned herein are the
    property of their respective owners.{'\n'}{'\n'}

    2. Chinese/Japanese Word Break Dictionary Data (cjdict.txt){'\n'}{'\n'}

     #     The Google Chrome software developed by Google is licensed under
     # the BSD license. Other software included in this distribution is
     # provided under other licenses, as set forth below.{'\n'}{'\n'}
     #
     #  The BSD License
     #  http://opensource.org/licenses/bsd-license.php
     #  Copyright (C) 2006-2008, Google Inc.{'\n'}{'\n'}
     #
     #  All rights reserved.{'\n'}{'\n'}
     #
     #  Redistribution and use in source and binary forms, with or without
     # modification, are permitted provided that the following conditions are met:{'\n'}{'\n'}
     #
     #  Redistributions of source code must retain the above copyright notice,
     # this list of conditions and the following disclaimer.{'\n'}{'\n'}
     #  Redistributions in binary form must reproduce the above
     # copyright notice, this list of conditions and the following
     # disclaimer in the documentation and/or other materials provided with
     # the distribution.{'\n'}{'\n'}
     #  Neither the name of  Google Inc. nor the names of its
     # contributors may be used to endorse or promote products derived from
     # this software without specific prior written permission.{'\n'}{'\n'}
     #
     #
     #  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
     # CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
     # INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
     # MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
     # DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
     # LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
     # CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
     # SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
     # BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
     # LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
     # NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
     # SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.{'\n'}{'\n'}
     #
     #
     #  The word list in cjdict.txt are generated by combining three word lists
     # listed below with further processing for compound word breaking. The
     # frequency is generated with an iterative training against Google web
     # corpora.{'\n'}{'\n'}
     #
     #  * Libtabe (Chinese)
     #    - https://sourceforge.net/project/?group_id=1519
     #    - Its license terms and conditions are shown below.{'\n'}{'\n'}
     #
     #  * IPADIC (Japanese)
     #    - http://chasen.aist-nara.ac.jp/chasen/distribution.html
     #    - Its license terms and conditions are shown below.{'\n'}{'\n'}
     #
     #  ---------COPYING.libtabe ---- BEGIN--------------------{'\n'}{'\n'}
     #
     #  /*{'\n'}{'\n'}
     #   * Copyright (c) 1999 TaBE Project.
     #   * Copyright (c) 1999 Pai-Hsiang Hsiao.
     #   * All rights reserved.{'\n'}{'\n'}
     #   *
     #   * Redistribution and use in source and binary forms, with or without
     #   * modification, are permitted provided that the following conditions
     #   * are met:{'\n'}{'\n'}
     #   *
     #   * . Redistributions of source code must retain the above copyright
     #   *   notice, this list of conditions and the following disclaimer.{'\n'}{'\n'}
     #   * . Redistributions in binary form must reproduce the above copyright
     #   *   notice, this list of conditions and the following disclaimer in
     #   *   the documentation and/or other materials provided with the
     #   *   distribution.{'\n'}{'\n'}
     #   * . Neither the name of the TaBE Project nor the names of its
     #   *   contributors may be used to endorse or promote products derived
     #   *   from this software without specific prior written permission.{'\n'}{'\n'}
     #   *
     #   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
     #   * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
     #   * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
     #   * FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
     #   * REGENTS OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
     #   * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
     #   * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
     #   * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
     #   * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
     #   * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
     #   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
     #   * OF THE POSSIBILITY OF SUCH DAMAGE.{'\n'}{'\n'}
     #   */
     #
     #  /*
     #   * Copyright (c) 1999 Computer Systems and Communication Lab,
     #   *                    Institute of Information Science, Academia
     #       *                    Sinica. All rights reserved.{'\n'}{'\n'}
     #   *
     #   * Redistribution and use in source and binary forms, with or without
     #   * modification, are permitted provided that the following conditions
     #   * are met:{'\n'}{'\n'}
     #   *
     #   * . Redistributions of source code must retain the above copyright
     #   *   notice, this list of conditions and the following disclaimer.{'\n'}{'\n'}
     #   * . Redistributions in binary form must reproduce the above copyright
     #   *   notice, this list of conditions and the following disclaimer in
     #   *   the documentation and/or other materials provided with the
     #   *   distribution.{'\n'}{'\n'}
     #   * . Neither the name of the Computer Systems and Communication Lab
     #   *   nor the names of its contributors may be used to endorse or
     #   *   promote products derived from this software without specific
     #   *   prior written permission.{'\n'}{'\n'}
     #   *
     #   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
     #   * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
     #   * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
     #   * FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
     #   * REGENTS OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
     #   * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
     #   * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
     #   * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
     #   * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
     #   * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
     #   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
     #   * OF THE POSSIBILITY OF SUCH DAMAGE.{'\n'}{'\n'}
     #   */
     #
     #  Copyright 1996 Chih-Hao Tsai @ Beckman Institute,
     #      University of Illinois
     #  c-tsai4@uiuc.edu  http://casper.beckman.uiuc.edu/~c-tsai4{'\n'}{'\n'}
     #
     #  ---------------COPYING.libtabe-----END--------------------------------{'\n'}{'\n'}
     #
     #
     #  ---------------COPYING.ipadic-----BEGIN-------------------------------{'\n'}{'\n'}
     #
     #  Copyright 2000, 2001, 2002, 2003 Nara Institute of Science
     #  and Technology.  All Rights Reserved.{'\n'}{'\n'}
     #
     #  Use, reproduction, and distribution of this software is permitted.
     #  Any copy of this software, whether in its original form or modified,
     #  must include both the above copyright notice and the following
     #  paragraphs.{'\n'}{'\n'}
     #
     #  Nara Institute of Science and Technology (NAIST),
     #  the copyright holders, disclaims all warranties with regard to this
     #  software, including all implied warranties of merchantability and
     #  fitness, in no event shall NAIST be liable for
     #  any special, indirect or consequential damages or any damages
     #  whatsoever resulting from loss of use, data or profits, whether in an
     #  action of contract, negligence or other tortuous action, arising out
     #  of or in connection with the use or performance of this software.{'\n'}{'\n'}
     #
     #  A large portion of the dictionary entries
     #  originate from ICOT Free Software.  The following conditions for ICOT
     #  Free Software applies to the current dictionary as well.{'\n'}{'\n'}
     #
     #  Each User may also freely distribute the Program, whether in its
     #  original form or modified, to any third party or parties, PROVIDED
     #  that the provisions of Section 3 ("NO WARRANTY") will ALWAYS appear
     #  on, or be attached to, the Program, which is distributed substantially
     #  in the same form as set out herein and that such intended
     #  distribution, if actually made, will neither violate or otherwise
     #  contravene any of the laws and regulations of the countries having
     #  jurisdiction over the User or the intended distribution itself.{'\n'}{'\n'}
     #
     #  NO WARRANTY{'\n'}{'\n'}
     #
     #  The program was produced on an experimental basis in the course of the
     #  research and development conducted during the project and is provided
     #  to users as so produced on an experimental basis.  Accordingly, the
     #  program is provided without any warranty whatsoever, whether express,
     #  implied, statutory or otherwise.  The term "warranty" used herein
     #  includes, but is not limited to, any warranty of the quality,
     #  performance, merchantability and fitness for a particular purpose of
     #  the program and the nonexistence of any infringement or violation of
     #  any right of any third party.{'\n'}{'\n'}
     #
     #  Each user of the program will agree and understand, and be deemed to
     #  have agreed and understood, that there is no warranty whatsoever for
     #  the program and, accordingly, the entire risk arising from or
     #  otherwise connected with the program is assumed by the user.{'\n'}{'\n'}
     #
     #  Therefore, neither ICOT, the copyright holder, or any other
     #  organization that participated in or was otherwise related to the
     #  development of the program and their respective officials, directors,
     #  officers and other employees shall be held liable for any and all
     #  damages, including, without limitation, general, special, incidental
     #  and consequential damages, arising out of or otherwise in connection
     #  with the use or inability to use the program or any product, material
     #  or result produced or otherwise obtained by using the program,
     #  regardless of whether they have been advised of, or otherwise had
     #  knowledge of, the possibility of such damages at any time during the
     #  project or thereafter.  Each user will be deemed to have agreed to the
     #  foregoing by his or her commencement of use of the program.  The term
     #  "use" as used herein includes, but is not limited to, the use,
     #  modification, copying and distribution of the program and the
     #  production of secondary products from the program.{'\n'}{'\n'}
     #
     #  In the case where the program, whether in its original form or
     #  modified, was distributed or delivered to or received by a user from
     #  any person, organization or entity other than ICOT, unless it makes or
     #  grants independently of ICOT any specific warranty to the user in
     #  writing, such person, organization or entity, will also be exempted
     #  from and not be held liable to the user for any such damages as noted
     #  above as far as the program is concerned.{'\n'}{'\n'}
     #
     #  ---------------COPYING.ipadic-----END----------------------------------{'\n'}{'\n'}

    3. Lao Word Break Dictionary Data (laodict.txt){'\n'}{'\n'}

     #  Copyright (c) 2013 International Business Machines Corporation
     #  and others. All Rights Reserved.{'\n'}{'\n'}
     #
     # Project: https://github.com/veer66/lao-dictionary
     # Dictionary: https://github.com/veer66/lao-dictionary/blob/master/Lao-Dictionary.txt
     # License: https://github.com/veer66/lao-dictionary/blob/master/Lao-Dictionary-LICENSE.txt
     #              (copied below){'\n'}{'\n'}
     #
     #  This file is derived from the above dictionary, with slight
     #  modifications.{'\n'}{'\n'}
     #  ----------------------------------------------------------------------{'\n'}{'\n'}
     #  Copyright (C) 2013 Brian Eugene Wilson, Robert Martin Campbell.
     #  All rights reserved.{'\n'}{'\n'}
     #
     #  Redistribution and use in source and binary forms, with or without
     #  modification,
     #  are permitted provided that the following conditions are met:{'\n'}{'\n'}
     #
     #
     # Redistributions of source code must retain the above copyright notice, this
     #  list of conditions and the following disclaimer. Redistributions in
     #  binary form must reproduce the above copyright notice, this list of
     #  conditions and the following disclaimer in the documentation and/or
     #  other materials provided with the distribution.{'\n'}{'\n'}
     #
     #
     # THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
     # "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
     # LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
     # FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
     # COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
     # INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
     # (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
     # SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
     # HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
     # STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
     # ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
     # OF THE POSSIBILITY OF SUCH DAMAGE.{'\n'}{'\n'}
     #  --------------------------------------------------------------------------{'\n'}{'\n'}

    4. Burmese Word Break Dictionary Data (burmesedict.txt){'\n'}{'\n'}

     #  Copyright (c) 2014 International Business Machines Corporation
     #  and others. All Rights Reserved.{'\n'}{'\n'}
     #
     #  This list is part of a project hosted at:
     #    github.com/kanyawtech/myanmar-karen-word-lists{'\n'}{'\n'}
     #
     #  --------------------------------------------------------------------------{'\n'}{'\n'}
     #  Copyright (c) 2013, LeRoy Benjamin Sharon
     #  All rights reserved.{'\n'}{'\n'}
     #
     #  Redistribution and use in source and binary forms, with or without
     #  modification, are permitted provided that the following conditions
     #  are met: Redistributions of source code must retain the above
     #  copyright notice, this list of conditions and the following
     #  disclaimer.  Redistributions in binary form must reproduce the
     #  above copyright notice, this list of conditions and the following
     #  disclaimer in the documentation and/or other materials provided
     #  with the distribution.{'\n'}{'\n'}
     #
     #    Neither the name Myanmar Karen Word Lists, nor the names of its
     #    contributors may be used to endorse or promote products derived
     #    from this software without specific prior written permission.{'\n'}{'\n'}
     #
     #  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
     #  CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
     #  INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
     #  MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
     #  DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS
     #  BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
     #  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
     #  TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
     #  DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
     #  ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
     #  TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
     #  THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
     #  SUCH DAMAGE.{'\n'}{'\n'}
     #  --------------------------------------------------------------------------{'\n'}{'\n'}

    5. Time Zone Database{'\n'}{'\n'}

      ICU uses the public domain data and code derived from Time Zone
    Database for its time zone support. The ownership of the TZ database
    is explained in BCP 175: Procedure for Maintaining the Time Zone
    Database section 7.{'\n'}{'\n'}

     # 7.  Database Ownership{'\n'}{'\n'}
     #
     #    The TZ database itself is not an IETF Contribution or an IETF
     #    document.  Rather it is a pre-existing and regularly updated work
     #    that is in the public domain, and is intended to remain in the
     #    public domain.  Therefore, BCPs 78 [RFC5378] and 79 [RFC3979] do
     #    not apply to the TZ Database or contributions that individuals make
     #    to it.  Should any claims be made and substantiated against the TZ
     #    Database, the organization that is providing the IANA
     #    Considerations defined in this RFC, under the memorandum of
     #    understanding with the IETF, currently ICANN, may act in accordance
     #    with all competent court orders.  No ownership claims will be made
     #    by ICANN or the IETF Trust on the database or the code.  Any person
     #    making a contribution to the database or code waives all rights to
     #    future claims in that contribution or in the TZ Database.{'\n'}{'\n'}

    6. Google double-conversion{'\n'}{'\n'}

    Copyright 2006-2011, the V8 project authors. All rights reserved.
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are
    met:{'\n'}{'\n'}

        * Redistributions of source code must retain the above copyright
          notice, this list of conditions and the following disclaimer.{'\n'}{'\n'}
        * Redistributions in binary form must reproduce the above
          copyright notice, this list of conditions and the following
          disclaimer in the documentation and/or other materials provided
          with the distribution.{'\n'}{'\n'}
        * Neither the name of Google Inc. nor the names of its
          contributors may be used to endorse or promote products derived
          from this software without specific prior written permission.{'\n'}{'\n'}

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
    "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
    LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
    A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
    OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
    SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
    LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- libuv, located at deps/uv, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    libuv is licensed for use as follows:{'\n'}{'\n'}

    ===={'\n'}{'\n'}
    Copyright (c) 2015-present libuv project contributors.{'\n'}{'\n'}

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to
    deal in the Software without restriction, including without limitation the
    rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    sell copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:{'\n'}{'\n'}

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.{'\n'}{'\n'}

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    IN THE SOFTWARE.{'\n'}{'\n'}
    ===={'\n'}{'\n'}

    This license applies to parts of libuv originating from the
    https://github.com/joyent/libuv repository:{'\n'}{'\n'}

    ===={'\n'}{'\n'}

    Copyright Joyent, Inc. and other Node contributors. All rights reserved.
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to
    deal in the Software without restriction, including without limitation the
    rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    sell copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:{'\n'}{'\n'}

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.{'\n'}{'\n'}

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    IN THE SOFTWARE.{'\n'}{'\n'}

    ===={'\n'}{'\n'}

    This license applies to all parts of libuv that are not externally
    maintained libraries.{'\n'}{'\n'}

    The externally maintained libraries used by libuv are:{'\n'}{'\n'}

      - tree.h (from FreeBSD), copyright Niels Provos. Two clause BSD license.{'\n'}{'\n'}

      - inet_pton and inet_ntop implementations, contained in src/inet.c, are
        copyright the Internet Systems Consortium, Inc., and licensed under the ISC
        license.{'\n'}{'\n'}

      - stdint-msvc2008.h (from msinttypes), copyright Alexander Chemeris. Three
        clause BSD license.{'\n'}{'\n'}

      - pthread-fixes.c, copyright Google Inc. and Sony Mobile Communications AB.
        Three clause BSD license.{'\n'}{'\n'}

      - android-ifaddrs.h, android-ifaddrs.c, copyright Berkeley Software Design
        Inc, Kenneth MacKay and Emergya (Cloud4all, FP7/2007-2013, grant agreement
        n° 289016). Three clause BSD license.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- llhttp, located at deps/llhttp, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    This software is licensed under the MIT License.{'\n'}{'\n'}

    Copyright Fedor Indutny, 2018.{'\n'}{'\n'}

    Permission is hereby granted, free of charge, to any person obtaining a
    copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to permit
    persons to whom the Software is furnished to do so, subject to the
    following conditions:{'\n'}{'\n'}

    The above copyright notice and this permission notice shall be included
    in all copies or substantial portions of the Software.{'\n'}{'\n'}

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    USE OR OTHER DEALINGS IN THE SOFTWARE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- corepack, located at deps/corepack, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    **Copyright © Corepack contributors**{'\n'}{'\n'}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:{'\n'}{'\n'}

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- OpenSSL, located at deps/openssl, is licensed as follows:{'\n'}{'\n'}
  """
    Copyright (c) 1998-2019 The OpenSSL Project.  All rights reserved.{'\n'}{'\n'}

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:{'\n'}{'\n'}

    1. Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.{'\n'}{'\n'}

    2. Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in
    the documentation and/or other materials provided with the
    distribution.{'\n'}{'\n'}

    3. All advertising materials mentioning features or use of this
    software must display the following acknowledgment:
    "This product includes software developed by the OpenSSL Project
    for use in the OpenSSL Toolkit. (http://www.openssl.org/)"{'\n'}{'\n'}

    4. The names "OpenSSL Toolkit" and "OpenSSL Project" must not be used to
    endorse or promote products derived from this software without
    prior written permission. For written permission, please contact
    openssl-core@openssl.org.{'\n'}{'\n'}

    5. Products derived from this software may not be called "OpenSSL"
    nor may "OpenSSL" appear in their names without prior written
    permission of the OpenSSL Project.{'\n'}{'\n'}

    6. Redistributions of any form whatsoever must retain the following
    acknowledgment:{'\n'}{'\n'}
    "This product includes software developed by the OpenSSL Project
    for use in the OpenSSL Toolkit (http://www.openssl.org/)"{'\n'}{'\n'}

    THIS SOFTWARE IS PROVIDED BY THE OpenSSL PROJECT ``AS IS'' AND ANY
    EXPRESSED OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
    PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE OpenSSL PROJECT OR
    ITS CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
    SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
    NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
    STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
    ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
    OF THE POSSIBILITY OF SUCH DAMAGE.{'\n'}{'\n'}
    ===================================================================={'\n'}{'\n'}

    This product includes cryptographic software written by Eric Young
    (eay@cryptsoft.com).  This product includes software written by Tim
    Hudson (tjh@cryptsoft.com).{'\n'}{'\n'}
  """{'\n'}{'\n'}

- Punycode.js, located at lib/punycode.js, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    Copyright Mathias Bynens https://mathiasbynens.be{'\n'}{'\n'}

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:{'\n'}{'\n'}

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.{'\n'}{'\n'}

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- V8, located at deps/v8, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    This license applies to all parts of V8 that are not externally
    maintained libraries.  The externally maintained libraries used by V8
    are:{'\n'}{'\n'}

      - PCRE test suite, located in
        test/mjsunit/third_party/regexp-pcre/regexp-pcre.js.  This is based on the
        test suite from PCRE-7.3, which is copyrighted by the University
        of Cambridge and Google, Inc.  The copyright notice and license
        are embedded in regexp-pcre.js.{'\n'}{'\n'}

      - Layout tests, located in test/mjsunit/third_party/object-keys.  These are
        based on layout tests from webkit.org which are copyrighted by
        Apple Computer, Inc. and released under a 3-clause BSD license.{'\n'}{'\n'}

      - Strongtalk assembler, the basis of the files assembler-arm-inl.h,
        assembler-arm.cc, assembler-arm.h, assembler-ia32-inl.h,
        assembler-ia32.cc, assembler-ia32.h, assembler-x64-inl.h,
        assembler-x64.cc, assembler-x64.h, assembler-mips-inl.h,
        assembler-mips.cc, assembler-mips.h, assembler.cc and assembler.h.
        This code is copyrighted by Sun Microsystems Inc. and released
        under a 3-clause BSD license.{'\n'}{'\n'}

      - Valgrind client API header, located at src/third_party/valgrind/valgrind.h
        This is released under the BSD license.{'\n'}{'\n'}

      - The Wasm C/C++ API headers, located at third_party/wasm-api/wasm.
        This is released under the Apache license. The API's upstream prototype
        implementation also formed the basis of V8's implementation in
        src/wasm/c-api.cc.{'\n'}{'\n'}

    These libraries have their own licenses; we recommend you read them,
    as their terms may differ from the terms below.{'\n'}{'\n'}

    Further license information can be found in LICENSE files located in
    sub-directories.{'\n'}{'\n'}

    Copyright 2014, the V8 project authors. All rights reserved.
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are
    met:{'\n'}{'\n'}

        * Redistributions of source code must retain the above copyright
          notice, this list of conditions and the following disclaimer.{'\n'}{'\n'}
        * Redistributions in binary form must reproduce the above
          copyright notice, this list of conditions and the following
          disclaimer in the documentation and/or other materials provided
          with the distribution.{'\n'}{'\n'}
        * Neither the name of Google Inc. nor the names of its
          contributors may be used to endorse or promote products derived
          from this software without specific prior written permission.{'\n'}{'\n'}

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
    "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
    LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
    A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
    OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
    SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
    LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- SipHash, located at deps/v8/src/third_party/siphash, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    SipHash reference C implementation{'\n'}{'\n'}

    Copyright (c) 2016 Jean-Philippe Aumasson jeanphilippe.aumasson@gmail.com{'\n'}{'\n'}

    To the extent possible under law, the author(s) have dedicated all
    copyright and related and neighboring rights to this software to the public
    domain worldwide. This software is distributed without any warranty.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- zlib, located at deps/zlib, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    zlib.h -- interface of the 'zlib' general purpose compression library
    version 1.2.11, January 15th, 2017{'\n'}{'\n'}

    Copyright (C) 1995-2017 Jean-loup Gailly and Mark Adler{'\n'}{'\n'}

    This software is provided 'as-is', without any express or implied
    warranty.  In no event will the authors be held liable for any damages
    arising from the use of this software.{'\n'}{'\n'}

    Permission is granted to anyone to use this software for any purpose,
    including commercial applications, and to alter it and redistribute it
    freely, subject to the following restrictions:{'\n'}{'\n'}

    1. The origin of this software must not be misrepresented; you must not
    claim that you wrote the original software. If you use this software
    in a product, an acknowledgment in the product documentation would be
    appreciated but is not required.{'\n'}{'\n'}
    2. Altered source versions must be plainly marked as such, and must not be
    misrepresented as being the original software.{'\n'}{'\n'}
    3. This notice may not be removed or altered from any source distribution.{'\n'}{'\n'}

    Jean-loup Gailly        Mark Adler{'\n'}{'\n'}
    jloup@gzip.org          madler@alumni.caltech.edu{'\n'}{'\n'}
  """{'\n'}{'\n'}

- npm, located at deps/npm, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    The npm application
    Copyright (c) npm, Inc. and Contributors
    Licensed on the terms of The Artistic License 2.0{'\n'}{'\n'}

    Node package dependencies of the npm application
    Copyright (c) their respective copyright owners
    Licensed on their respective license terms{'\n'}{'\n'}

    The npm public registry at https://registry.npmjs.org
    and the npm website at https://www.npmjs.com
    Operated by npm, Inc.{'\n'}{'\n'}
    Use governed by terms published on https://www.npmjs.com{'\n'}{'\n'}

    "Node.js"{'\n'}{'\n'}
    Trademark Joyent, Inc., https://joyent.com
    Neither npm nor npm, Inc. are affiliated with Joyent, Inc.{'\n'}{'\n'}

    The Node.js application
    Project of Node Foundation, https://nodejs.org{'\n'}{'\n'}

    The npm Logo
    Copyright (c) Mathias Pettersson and Brian Hammond{'\n'}{'\n'}

    "Gubblebum Blocky" typeface
    Copyright (c) Tjarda Koster, https://jelloween.deviantart.com
    Used with permission{'\n'}{'\n'}

    --------{'\n'}{'\n'}

    The Artistic License 2.0{'\n'}{'\n'}

    Copyright (c) 2000-2006, The Perl Foundation.{'\n'}{'\n'}

    Everyone is permitted to copy and distribute verbatim copies
    of this license document, but changing it is not allowed.{'\n'}{'\n'}

    Preamble{'\n'}{'\n'}

    This license establishes the terms under which a given free software
    Package may be copied, modified, distributed, and/or redistributed.
    The intent is that the Copyright Holder maintains some artistic
    control over the development of that Package while still keeping the
    Package available as open source and free software.{'\n'}{'\n'}

    You are always permitted to make arrangements wholly outside of this
    license directly with the Copyright Holder of a given Package.  If the
    terms of this license do not permit the full use that you propose to
    make of the Package, you should contact the Copyright Holder and seek
    a different licensing arrangement.{'\n'}{'\n'}

    Definitions{'\n'}{'\n'}

        "Copyright Holder" means the individual(s) or organization(s)
        named in the copyright notice for the entire Package.{'\n'}{'\n'}

        "Contributor" means any party that has contributed code or other
        material to the Package, in accordance with the Copyright Holder's
        procedures.{'\n'}{'\n'}

        "You" and "your" means any person who would like to copy,
        distribute, or modify the Package.{'\n'}{'\n'}

        "Package" means the collection of files distributed by the
        Copyright Holder, and derivatives of that collection and/or of
        those files. A given Package may consist of either the Standard
        Version, or a Modified Version.{'\n'}{'\n'}

        "Distribute" means providing a copy of the Package or making it
        accessible to anyone else, or in the case of a company or
        organization, to others outside of your company or organization.{'\n'}{'\n'}

        "Distributor Fee" means any fee that you charge for Distributing
        this Package or providing support for this Package to another
        party.  It does not mean licensing fees.{'\n'}{'\n'}

        "Standard Version" refers to the Package if it has not been
        modified, or has been modified only in ways explicitly requested
        by the Copyright Holder.{'\n'}{'\n'}
        "Modified Version" means the Package, if it has been changed, and
        such changes were not explicitly requested by the Copyright
        Holder.{'\n'}{'\n'}

        "Original License" means this Artistic License as Distributed with
        the Standard Version of the Package, in its current version or as
        it may be modified by The Perl Foundation in the future.{'\n'}{'\n'}

        "Source" form means the source code, documentation source, and
        configuration files for the Package.{'\n'}{'\n'}

        "Compiled" form means the compiled bytecode, object code, binary,
        or any other form resulting from mechanical transformation or
        translation of the Source form.{'\n'}{'\n'}

    Permission for Use and Modification Without Distribution{'\n'}{'\n'}

    (1)  You are permitted to use the Standard Version and create and use
    Modified Versions for any purpose without restriction, provided that
    you do not Distribute the Modified Version.{'\n'}{'\n'}

    Permissions for Redistribution of the Standard Version{'\n'}{'\n'}

    (2)  You may Distribute verbatim copies of the Source form of the
    Standard Version of this Package in any medium without restriction,
    either gratis or for a Distributor Fee, provided that you duplicate
    all of the original copyright notices and associated disclaimers.  At
    your discretion, such verbatim copies may or may not include a
    Compiled form of the Package.{'\n'}{'\n'}

    (3)  You may apply any bug fixes, portability changes, and other
    modifications made available from the Copyright Holder.  The resulting
    Package will still be considered the Standard Version, and as such
    will be subject to the Original License.{'\n'}{'\n'}

    Distribution of Modified Versions of the Package as Source{'\n'}{'\n'}

    (4)  You may Distribute your Modified Version as Source (either gratis
    or for a Distributor Fee, and with or without a Compiled form of the
    Modified Version) provided that you clearly document how it differs
    from the Standard Version, including, but not limited to, documenting
    any non-standard features, executables, or modules, and provided that
    you do at least ONE of the following:{'\n'}{'\n'}

        (a)  make the Modified Version available to the Copyright Holder
        of the Standard Version, under the Original License, so that the
        Copyright Holder may include your modifications in the Standard
        Version.{'\n'}{'\n'}

        (b)  ensure that installation of your Modified Version does not
        prevent the user installing or running the Standard Version. In
        addition, the Modified Version must bear a name that is different
        from the name of the Standard Version.{'\n'}{'\n'}

        (c)  allow anyone who receives a copy of the Modified Version to
        make the Source form of the Modified Version available to others
        under{'\n'}{'\n'}

            (i)  the Original License or{'\n'}{'\n'}

            (ii)  a license that permits the licensee to freely copy,
            modify and redistribute the Modified Version using the same
            licensing terms that apply to the copy that the licensee
            received, and requires that the Source form of the Modified
            Version, and of any works derived from it, be made freely
            available in that license fees are prohibited but Distributor
            Fees are allowed.{'\n'}{'\n'}

    Distribution of Compiled Forms of the Standard Version
    or Modified Versions without the Source{'\n'}{'\n'}

    (5)  You may Distribute Compiled forms of the Standard Version without
    the Source, provided that you include complete instructions on how to
    get the Source of the Standard Version.  Such instructions must be
    valid at the time of your distribution.  If these instructions, at any
    time while you are carrying out such distribution, become invalid, you
    must provide new instructions on demand or cease further distribution.
    If you provide valid instructions or cease distribution within thirty
    days after you become aware that the instructions are invalid, then
    you do not forfeit any of your rights under this license.{'\n'}{'\n'}

    (6)  You may Distribute a Modified Version in Compiled form without
    the Source, provided that you comply with Section 4 with respect to
    the Source of the Modified Version.{'\n'}{'\n'}

    Aggregating or Linking the Package{'\n'}{'\n'}

    (7)  You may aggregate the Package (either the Standard Version or
    Modified Version) with other packages and Distribute the resulting
    aggregation provided that you do not charge a licensing fee for the
    Package.  Distributor Fees are permitted, and licensing fees for other
    components in the aggregation are permitted. The terms of this license
    apply to the use and Distribution of the Standard or Modified Versions
    as included in the aggregation.{'\n'}{'\n'}

    (8) You are permitted to link Modified and Standard Versions with
    other works, to embed the Package in a larger work of your own, or to
    build stand-alone binary or bytecode versions of applications that
    include the Package, and Distribute the result without restriction,
    provided the result does not expose a direct interface to the Package.{'\n'}{'\n'}

    Items That are Not Considered Part of a Modified Version{'\n'}{'\n'}

    (9) Works (including, but not limited to, modules and scripts) that
    merely extend or make use of the Package, do not, by themselves, cause
    the Package to be a Modified Version.  In addition, such works are not
    considered parts of the Package itself, and are not subject to the
    terms of this license.{'\n'}{'\n'}

    General Provisions{'\n'}{'\n'}

    (10)  Any use, modification, and distribution of the Standard or
    Modified Versions is governed by this Artistic License. By using,
    modifying or distributing the Package, you accept this license. Do not
    use, modify, or distribute the Package, if you do not accept this
    license.{'\n'}{'\n'}

    (11)  If your Modified Version has been derived from a Modified
    Version made by someone other than you, you are nevertheless required
    to ensure that your Modified Version complies with the requirements of
    this license.{'\n'}{'\n'}

    (12)  This license does not grant you the right to use any trademark,
    service mark, tradename, or logo of the Copyright Holder.{'\n'}{'\n'}

    (13)  This license includes the non-exclusive, worldwide,
    free-of-charge patent license to make, have made, use, offer to sell,
    sell, import and otherwise transfer the Package with respect to any
    patent claims licensable by the Copyright Holder that are necessarily
    infringed by the Package. If you institute patent litigation
    (including a cross-claim or counterclaim) against any party alleging
    that the Package constitutes direct or contributory patent
    infringement, then this Artistic License to you shall terminate on the
    date that such litigation is filed.{'\n'}{'\n'}

    (14)  Disclaimer of Warranty:{'\n'}{'\n'}
    THE PACKAGE IS PROVIDED BY THE COPYRIGHT HOLDER AND CONTRIBUTORS "AS
    IS' AND WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES. THE IMPLIED
    WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
    NON-INFRINGEMENT ARE DISCLAIMED TO THE EXTENT PERMITTED BY YOUR LOCAL
    LAW. UNLESS REQUIRED BY LAW, NO COPYRIGHT HOLDER OR CONTRIBUTOR WILL
    BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
    DAMAGES ARISING IN ANY WAY OUT OF THE USE OF THE PACKAGE, EVEN IF
    ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.{'\n'}{'\n'}

    --------{'\n'}{'\n'}
  """{'\n'}{'\n'}

- GYP, located at tools/gyp, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    Copyright (c) 2020 Node.js contributors. All rights reserved.
    Copyright (c) 2009 Google Inc. All rights reserved.{'\n'}{'\n'}

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are
    met:{'\n'}{'\n'}

       * Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.{'\n'}{'\n'}
       * Redistributions in binary form must reproduce the above
    copyright notice, this list of conditions and the following disclaimer
    in the documentation and/or other materials provided with the
    distribution.{'\n'}{'\n'}
       * Neither the name of Google Inc. nor the names of its
    contributors may be used to endorse or promote products derived from
    this software without specific prior written permission.{'\n'}{'\n'}

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
    "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
    LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
    A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
    OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
    SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
    LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- inspector_protocol, located at tools/inspector_protocol, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    // Copyright 2016 The Chromium Authors. All rights reserved.{'\n'}{'\n'}
    //
    // Redistribution and use in source and binary forms, with or without
    // modification, are permitted provided that the following conditions are
    // met:{'\n'}{'\n'}
    //
    //    * Redistributions of source code must retain the above copyright
    // notice, this list of conditions and the following disclaimer.{'\n'}{'\n'}
    //    * Redistributions in binary form must reproduce the above
    // copyright notice, this list of conditions and the following disclaimer
    // in the documentation and/or other materials provided with the
    // distribution.{'\n'}{'\n'}
    //    * Neither the name of Google Inc. nor the names of its
    // contributors may be used to endorse or promote products derived from
    // this software without specific prior written permission.{'\n'}{'\n'}
    //
    // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
    // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
    // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
    // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
    // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
    // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
    // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
    // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- jinja2, located at tools/inspector_protocol/jinja2, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    Copyright (c) 2009 by the Jinja Team, see AUTHORS for more details.{'\n'}{'\n'}

    Some rights reserved.{'\n'}{'\n'}

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are
    met:{'\n'}{'\n'}

        * Redistributions of source code must retain the above copyright
          notice, this list of conditions and the following disclaimer.{'\n'}{'\n'}

        * Redistributions in binary form must reproduce the above
          copyright notice, this list of conditions and the following
          disclaimer in the documentation and/or other materials provided
          with the distribution.{'\n'}{'\n'}

        * The names of the contributors may not be used to endorse or
          promote products derived from this software without specific
          prior written permission.{'\n'}{'\n'}

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
    "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
    LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
    A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
    OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
    SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
    LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- markupsafe, located at tools/inspector_protocol/markupsafe, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    Copyright (c) 2010 by Armin Ronacher and contributors.  See AUTHORS
    for more details.{'\n'}{'\n'}

    Some rights reserved.{'\n'}{'\n'}

    Redistribution and use in source and binary forms of the software as well
    as documentation, with or without modification, are permitted provided
    that the following conditions are met:{'\n'}{'\n'}

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.{'\n'}{'\n'}

    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.{'\n'}{'\n'}

    * The names of the contributors may not be used to endorse or
      promote products derived from this software without specific
      prior written permission.{'\n'}{'\n'}

    THIS SOFTWARE AND DOCUMENTATION IS PROVIDED BY THE COPYRIGHT HOLDERS AND
    CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT
    NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
    A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER
    OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
    EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
    LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE AND DOCUMENTATION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
    DAMAGE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- cpplint.py, located at tools/cpplint.py, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    Copyright (c) 2009 Google Inc. All rights reserved.{'\n'}{'\n'}

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are
    met:{'\n'}{'\n'}

       * Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.{'\n'}{'\n'}
       * Redistributions in binary form must reproduce the above
    copyright notice, this list of conditions and the following disclaimer
    in the documentation and/or other materials provided with the
    distribution.{'\n'}{'\n'}
       * Neither the name of Google Inc. nor the names of its
    contributors may be used to endorse or promote products derived from
    this software without specific prior written permission.{'\n'}{'\n'}

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
    "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
    LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
    A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
    OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
    SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
    LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- ESLint, located at tools/node_modules/eslint, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    Copyright JS Foundation and other contributors, https://js.foundation{'\n'}{'\n'}

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:{'\n'}{'\n'}

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.{'\n'}{'\n'}

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- Babel, located at tools/node_modules/@babel, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    MIT License{'\n'}{'\n'}

    Copyright (c) 2014-present Sebastian McKenzie and other contributors{'\n'}{'\n'}

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:{'\n'}{'\n'}

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.{'\n'}{'\n'}

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- gtest, located at deps/googletest, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    Copyright 2008, Google Inc.
    All rights reserved.{'\n'}{'\n'}

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are
    met:{'\n'}{'\n'}

        * Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.{'\n'}{'\n'}
        * Redistributions in binary form must reproduce the above
    copyright notice, this list of conditions and the following disclaimer
    in the documentation and/or other materials provided with the
    distribution.{'\n'}{'\n'}
        * Neither the name of Google Inc. nor the names of its
    contributors may be used to endorse or promote products derived from
    this software without specific prior written permission.{'\n'}{'\n'}

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
    "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
    LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
    A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
    OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
    SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
    LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- nghttp2, located at deps/nghttp2, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    The MIT License{'\n'}{'\n'}

    Copyright (c) 2012, 2014, 2015, 2016 Tatsuhiro Tsujikawa
    Copyright (c) 2012, 2014, 2015, 2016 nghttp2 contributors{'\n'}{'\n'}

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:{'\n'}{'\n'}

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.{'\n'}{'\n'}

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- large_pages, located at src/large_pages, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
     Copyright (C) 2018 Intel Corporation{'\n'}{'\n'}

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"),
     to deal in the Software without restriction, including without limitation
     the rights to use, copy, modify, merge, publish, distribute, sublicense,
     and/or sell copies of the Software, and to permit persons to whom
     the Software is furnished to do so, subject to the following conditions:{'\n'}{'\n'}

     The above copyright notice and this permission notice shall be included
     in all copies or substantial portions of the Software.{'\n'}{'\n'}

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
     OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
     ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
     OR OTHER DEALINGS IN THE SOFTWARE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- caja, located at lib/internal/freeze_intrinsics.js, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
     Adapted from SES/Caja - Copyright (C) 2011 Google Inc.
     Copyright (C) 2018 Agoric{'\n'}{'\n'}

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at{'\n'}{'\n'}

     http://www.apache.org/licenses/LICENSE-2.0{'\n'}{'\n'}

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- brotli, located at deps/brotli, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    Copyright (c) 2009, 2010, 2013-2016 by the Brotli Authors.{'\n'}{'\n'}

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:{'\n'}{'\n'}

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.{'\n'}{'\n'}

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- HdrHistogram, located at deps/histogram, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    The code in this repository code was Written by Gil Tene, Michael Barker,
    and Matt Warren, and released to the public domain, as explained at
    http://creativecommons.org/publicdomain/zero/1.0/{'\n'}{'\n'}

    For users of this code who wish to consume it under the "BSD" license
    rather than under the public domain or CC0 contribution text mentioned
    above, the code found under this directory is *also* provided under the
    following license (commonly referred to as the BSD 2-Clause License). This
    license does not detract from the above stated release of the code into
    the public domain, and simply represents an additional license granted by
    the Author.{'\n'}{'\n'}

    -----------------------------------------------------------------------------{'\n'}{'\n'}
    ** Beginning of "BSD 2-Clause License" text. **{'\n'}{'\n'}

     Copyright (c) 2012, 2013, 2014 Gil Tene
     Copyright (c) 2014 Michael Barker
     Copyright (c) 2014 Matt Warren
     All rights reserved.{'\n'}{'\n'}

     Redistribution and use in source and binary forms, with or without
     modification, are permitted provided that the following conditions are met:{'\n'}{'\n'}

     1. Redistributions of source code must retain the above copyright notice,
        this list of conditions and the following disclaimer.{'\n'}{'\n'}

     2. Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation
        and/or other materials provided with the distribution.{'\n'}{'\n'}

     THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
     AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
     IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
     ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
     LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
     CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
     SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
     INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
     CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
     ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
     THE POSSIBILITY OF SUCH DAMAGE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- highlight.js, located at doc/api_assets/highlight.pack.js, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    BSD 3-Clause License{'\n'}{'\n'}

    Copyright (c) 2006, Ivan Sagalaev.
    All rights reserved.{'\n'}{'\n'}

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:{'\n'}{'\n'}

    * Redistributions of source code must retain the above copyright notice, this
      list of conditions and the following disclaimer.{'\n'}{'\n'}

    * Redistributions in binary form must reproduce the above copyright notice,
      this list of conditions and the following disclaimer in the documentation
      and/or other materials provided with the distribution.{'\n'}{'\n'}

    * Neither the name of the copyright holder nor the names of its
      contributors may be used to endorse or promote products derived from
      this software without specific prior written permission.{'\n'}{'\n'}

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
    SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
    CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
    OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- node-heapdump, located at src/heap_utils.cc, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    ISC License{'\n'}{'\n'}

    Copyright (c) 2012, Ben Noordhuis info@bnoordhuis.nl{'\n'}{'\n'}

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted, provided that the above
    copyright notice and this permission notice appear in all copies.{'\n'}{'\n'}

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
    WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
    MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
    ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
    WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
    ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
    OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.{'\n'}{'\n'}

    === src/compat.h src/compat-inl.h ==={'\n'}{'\n'}

    ISC License{'\n'}{'\n'}

    Copyright (c) 2014, StrongLoop Inc.{'\n'}{'\n'}

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted, provided that the above
    copyright notice and this permission notice appear in all copies.{'\n'}{'\n'}

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
    WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
    MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
    ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
    WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
    ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
    OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- rimraf, located at lib/internal/fs/rimraf.js, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    The ISC License{'\n'}{'\n'}

    Copyright (c) Isaac Z. Schlueter and Contributors{'\n'}{'\n'}

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted, provided that the above
    copyright notice and this permission notice appear in all copies.{'\n'}{'\n'}

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
    WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
    MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
    ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
    WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
    ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
    IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- uvwasi, located at deps/uvwasi, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    MIT License{'\n'}{'\n'}

    Copyright (c) 2019 Colin Ihrig and Contributors{'\n'}{'\n'}

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:{'\n'}{'\n'}

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.{'\n'}{'\n'}

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- ngtcp2, located at deps/ngtcp2/ngtcp2/, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    The MIT License{'\n'}{'\n'}

    Copyright (c) 2016 ngtcp2 contributors{'\n'}{'\n'}

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:{'\n'}{'\n'}

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.{'\n'}{'\n'}

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- nghttp3, located at deps/ngtcp2/nghttp3/, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    The MIT License{'\n'}{'\n'}

    Copyright (c) 2019 nghttp3 contributors{'\n'}{'\n'}

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:{'\n'}{'\n'}

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.{'\n'}{'\n'}

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.{'\n'}{'\n'}
  """{'\n'}{'\n'}

- node-fs-extra, located at lib/internal/fs/cp, is licensed as follows:{'\n'}{'\n'}
  """{'\n'}{'\n'}
    (The MIT License){'\n'}{'\n'}

    Copyright (c) 2011-2017 JP Richardson{'\n'}{'\n'}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files
    (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify,
     merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:{'\n'}{'\n'}

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.{'\n'}{'\n'}

    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
    WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
    OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
     ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.{'\n'}{'\n'}
  """{'\n'}{'\n'}</Text>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#FFF",
    },

    title: {
        color: "#F41635",
        fontSize: 40, 
        fontWeight: "bold",
        marginLeft: 76,
        marginTop: 40,
        marginBottom: -95,
    },

    text: {
        color: "black",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 45,
        fontSize: 15,
    },

    button: {
        backgroundColor: "#F41635",
        borderRadius: 40,
        alignSelf: "center",
        paddingVertical: 10,
        marginTop: -40,
    },

    icon: {
        bottom: -35,
        right: -3,
    },

    btnContainer: {
        marginTop: 15,
        right: -285,
    },

    support: {
        marginLeft: 130,
        marginTop: 20,
        color: "grey",
    },

    supportEmail: {
        marginLeft: 84,
        marginTop: 20,
        color: "grey",
    },
})
